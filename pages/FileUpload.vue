<template>
  <div>
    <div>파일업로드 페이지</div>
    <div class="upload-card">
        <div class="row">
            <div class="col-md-12">
                <div id="input-section">
                    <div class="heading">업로드할 파일을 선택해주세요:</div>
                    <input type="file" id="js-file-input" multiple v-on:change="fileSelect">
                </div>

                <div id="progress-section">
                    <div class="heading" id="heading"></div>
                    <div class="d-flex">
                        <div class="js-action-btn">
                            <button class="btn" id="toggle-btn" v-on:click="uploadFile">파일 업로드</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div>{{ convertedFiles[0].name }}</div> -->
    <div v-for="convertedFile in convertedFiles" v-bind:key="convertedFile">          
        <div>파일명 : {{ convertedFile.file.name }}</div>
        <div>파일 타입 : {{ convertedFile.file.type }}</div>
        <div>파일 크기 : {{ convertedFile.file.size }}</div>
    </div>
  </div>

</template>

<script setup lang="js">
import * as tus from 'tus-js-client'
import $ from "jquery";
   
   definePageMeta({
        layout: 'logined'
    })
    

    function formatBytes(bytes, decimals = 2) {
            if (bytes === 0) {
                return '0 Bytes'
            }

            const k = 1024
            const dm = decimals < 0 ? 0 : decimals
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
            const i = Math.floor(Math.log(bytes) / Math.log(k))
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
        }
        let convertedFiles = []
    
        function fileSelect (e) {
                // dataDiv.innerHTML = '';
                const files = e.target.files;
                console.log(files)
                Object.keys(files).forEach(k => {
                    // console.log(k)
                    convertedFiles = [
                        ...convertedFiles,
                        { id: URL.createObjectURL(files[k]), file: files[k]}
                    ];
                    console.log(convertedFiles[0])
                })
            }

        function uploadFile () {
            console.log('호출')
            convertedFiles.length>= 1 && convertedFiles.map((i,key ) => {
                const file = i.file
                key++
                const chunkSize = parseInt(50000000, 10)
                console.log(file)
                let upload = new tus.Upload( file, {
                    // endpoint   : 'https://tusd.tusdemo.net/files/',
                    //  endpoint: "/api/tus/file/upload",
                     endpoint : "http://localhost:28220/api/tus/file/upload",
                    // endpoint : "/upload",
                    chunkSize,
                    // retryDelays: [0, 1000, 3000, 5000],
                    
                    metadata: {
                        filename: file.name,
                        filetype: file.type
                    },
                    onError: function (error) {
                        console.log("Failed because: " + error);
                    },
                    onProgress: function (bytesUploaded, bytesTotal) {
                        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
                        $('.progress-bar_' + key).css('width', percentage + '%');

                        if (percentage < 100.00) {
                            $('#js-upload-text-progress_' + key).html(`Uploaded ${formatBytes(bytesUploaded)} of ${formatBytes(bytesTotal)} (${percentage}%)`);
                        } else {
                            $('#js-upload-text-progress_' + key).html(`Uploaded ${formatBytes(bytesUploaded)} of ${formatBytes(bytesTotal)} (${percentage}%) 파일 저장 중`);
                        }
                    },
                    onSuccess: function () {
                        $('#js-upload-text-progress_' + key).html("파일 저장 완료");
                    }
                });

                upload.start()
                // reset()
                // upload.findPreviousUploads().then(function (previousUploads) {
                //     // Found previous uploads so we select the first one.
                //     if (previousUploads.length) {
                //         upload.resumeFromPreviousUpload(previousUploads[0])
                //     }

                //     // Start the upload
                //     upload.start()
                // })


            })
        }

</script>

<!-- <script setup>

import * as tus from 'tus-js-client'

export default {
    data () {
        return {
            convertedFiles :[]
        }
    },
    methods : {
        fileSelect (e) {
            // dataDiv.innerHTML = '';
            const files = e.target.files;
            // console.log(files)
            Object.keys(files).forEach(k => {
                // console.log(k)
                this.convertedFiles = [
                    ...this.convertedFiles,
                    { id: URL.createObjectURL(files[k]), file: files[k]}
                ];
                console.log(this.convertedFiles[0])
            })
        },
        reset () {
            // convertedFiles && convertedFiles.map((i, key) => {
            //     $('.progress-bar_' + key).css('width', '0%');
            //     $('#js-upload-text-progress_' + key).html('');
            // })
        },
        uploadFile () {
            this.convertedFiles.length>= 1 && this.convertedFiles.map((i,key ) => {
                const file = i.file
                key++
                // const chunkSize = parseInt(50000000, 10)
                const chunkSize = 50000000
                console.log(file)
                let upload = new tus.Upload( file, {
                    // endpoint   : 'https://tusd.tusdemo.net/files/',
                    //  endpoint: "/api/tus/file/upload",
                     endpoint : "http://localhost:28220/api/tus/file/upload",
                    // endpoint : "/upload",
                    chunkSize,
                    retryDelays: [0, 1000, 3000, 5000],
                    
                    metadata: {
                        filename: file.name,
                        filetype: file.type
                    },
                    onError: function (error) {
                        console.log("Failed because: " + error);
                    },
                    onProgress: function (bytesUploaded, bytesTotal) {
                        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
                        $('.progress-bar_' + key).css('width', percentage + '%');

                        if (percentage < 100.00) {
                            $('#js-upload-text-progress_' + key).html(`Uploaded ${formatBytes(bytesUploaded)} of ${formatBytes(bytesTotal)} (${percentage}%)`);
                        } else {
                            $('#js-upload-text-progress_' + key).html(`Uploaded ${formatBytes(bytesUploaded)} of ${formatBytes(bytesTotal)} (${percentage}%) 파일 저장 중`);
                        }
                    },
                    onSuccess: function () {
                        $('#js-upload-text-progress_' + key).html("파일 저장 완료");
                    }
                });
                this.reset()
                upload.findPreviousUploads().then(function (previousUploads) {
                    // Found previous uploads so we select the first one.
                    if (previousUploads.length) {
                        upload.resumeFromPreviousUpload(previousUploads[0])
                    }

                    // Start the upload
                    upload.start()
                })


            })
        },
        clickUploadBtn () {
                this.reset()
                // Check if there are any previous uploads to continue.
                upload.findPreviousUploads().then(function (previousUploads) {
                    // Found previous uploads so we select the first one.
                    if (previousUploads.length) {
                        upload.resumeFromPreviousUpload(previousUploads[0])
                    }

                    // Start the upload
                    upload.start()
                })
        }
    }
    }

</script> -->

<style>

</style>