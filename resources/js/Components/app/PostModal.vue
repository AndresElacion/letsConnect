<script setup>
  import PostUserHeader from '@/Components/app/PostUserHeader.vue'
  import InputTextarea from '@/Components/InputTextarea.vue';
  import { useForm } from '@inertiajs/vue3';
  import { XMarkIcon, PaperClipIcon, BookmarkIcon } from '@heroicons/vue/24/solid'
  import { ref, computed, Teleport, watch, reactive } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import { isImage } from '@/helpers.js';

  const editor = ClassicEditor
  const editorConfig = {
    toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList', '|', 'outdent', 'indent']  
  }

  const props = defineProps({
    post: {
      Object,
      required: true
    },
    modelValue: Boolean
  })

  const attachmentFiles = ref([])

  const form = useForm({
    id: null,
    body: '',
    attachments: []
  })

  const show = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  })

  const emit = defineEmits(['update:modelValue'])

  watch(() => props.post, () => {
    form.id = props.post.id
    form.body = props.post.body
  })
  
  function closeModal() {
    show.value = false
    resetModal()
  }

  function resetModal() {
    form.reset()
    attachmentFiles.value = []
  }

  function submit() {
    form.attachments = attachmentFiles.value.map(myFile => myFile.file)
    if (form.id) {
      form.put(route('post.update', props.post), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal()
        }
      })
    } else {
      form.post(route('post.create'), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal()
        }
      })
    }
  }

  /* this is connected to helpers.js */
  async function onAttachmentChoose($event) {
    for (const file of $event.target.files) {
      const myFile = {
        file,
        url: await readFile(file) // null for non image type of file. | accept a file
      }
      attachmentFiles.value.push(myFile)
    }
    $event.target.value = null
    console.log(attachmentFiles.value)
  }

  /* file reader to display the image (resolve, reject) */
  async function readFile(file) {
    return new Promise((res, rej) => {
      if (isImage(file)) { // passing the file into isImage
      const reader = new FileReader()
      reader.onload = () => {
        res(reader.result)
      }
      reader.onerror = rej
      reader.readAsDataURL(file)
    } else {
      res(null)
    }
  })
}

  function removeFile(myFile) {
    attachmentFiles.value = attachmentFiles.value.filter(f => f !== myFile) // the f is myFile
  }
</script>
  

<template>
  <Teleport to="body">
    <TransitionRoot appear :show="show" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class=" flex items-center justify-between py-3 px-4 font-medium bg-gray-100 text-gray-900"
                >
                  {{ form.id ? 'Update Post' : 'Create Post' }}
                  <button @click="show = false" class="w-8 h-8 rounded-full hover:bg-black/5 transition flex items-center justify-center">
                    <XMarkIcon class="w-4 h-4"/>
                  </button>
                </DialogTitle>
                <div class="p-3">
                  <PostUserHeader :post="post" :show-time="false" class="mb-3" />
                  <ckeditor :editor="editor" v-model="form.body" :config="editorConfig"></ckeditor>

                  <!-- image preview -->
                  <div class="grid gap-3 my-3" :class="[attachmentFiles.length == 1 ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3']">
                    
                    <template v-for="myFile of attachmentFiles">
                      <div class="group aspect-square bg-blue-100 flex flex-col items-center justify-center relative rounded-lg">

                        <!-- cancel -->
                        <button @click="removeFile(myFile)" class="absolute right-0 top-0 rounded-full w-6 h-6 flex items-center justify-center bg-black/30 hover:bg-black/80 text-white">
                          <XMarkIcon class="h-5 w-5"/>
                        </button>
              
                        <img v-if="isImage(myFile.file)" 
                        :src="myFile.url" 
                        class="object-contain rounded-lg">
              
                        <template v-else>
                          <PaperClipIcon class="w-10 h-10"/>
                          <small class="text-center">{{ myFile.file.name }}</small>
                        </template>
                      </div>
                    </template>
                  </div>
                  <!-- /image preview -->
                </div>
  
                <div class="flex gap-2 py-3 px-4">
                  <button
                    type="button"
                    class="flex items-center justify-center w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative"
                    @click="submit"
                  >
                  <PaperClipIcon class="w-4 h-4 mr-2" />
                    Attach Files
                    <input @click.stop @change="onAttachmentChoose" type="file" multiple class="absolute left-0 top-0 right-0 bottom-0 opacity-0" />
                  </button>
                  <button
                    type="button"
                    class="flex items-center justify-center w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    @click="submit"
                  >
                  <BookmarkIcon class="w-4 h-4 mr-2" />
                    Submit
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </teleport>
</template>