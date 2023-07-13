<template>
  <div class="login-form-wrapper">
    <div class="lang-select">
      <g-lang-select />
    </div>
    <div class="login-form-title">登录精灵盒</div>
    <div class="login-form-sub-title">拖拽式轻松搭建数据可视化</div>
    <n-config-provider
      :theme-overrides="{
        Input: {
          heightSmall: '32px',
          color: '#f2f3f5',
          colorFocus: '#0000',
          colorFocusError: '#0000',
          colorFocusWarning: '#0000',
          textColor: 'var(--n-text-decoration-color)',
          iconColor: 'var(--n-text-decoration-color)',
          caretColor: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.0)',
        },
      }"
      abstract
    >
      <n-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
        label-placement="left"
        size="small"
        class="login-form"
      >
        <n-form-item path="username">
          <n-input
            v-model:value="loginForm.username"
            placeholder="用户名"
            type="text"
            size="small"
          >
            <template #prefix>
              <i class="iconfont icon-com-custom"></i>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="password">
          <n-tooltip :show="capsTooltip" placement="top-start">
            <template #trigger>
              <n-input
                v-model:value="loginForm.password"
                placeholder="请输入密码"
                type="password"
                size="small"
                show-password-on="click"
                @keydown="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter="handleLogin"
              >
                <template #prefix>
                  <i class="iconfont icon-lock"></i>
                </template>
              </n-input>
            </template>
            <span> 大写锁定已打开 </span>
          </n-tooltip>
        </n-form-item>
        <n-space vertical size="small">
          <div class="login-form-password-actions">
            <n-checkbox
              v-model:checked="rememberPassword"
              @change="setRememberPassword"
            >
              记住密码
            </n-checkbox>
            <n-button
              text
              type="primary"
            >
              忘记密码
            </n-button>
          </div>
          <n-button
            :loading="loading"
            type="primary"
            size="small"
            style="width: 100%; margin-bottom: 20px;"
            @click="handleLogin"
          >
            登录
          </n-button>
          <n-button
            type="text"
            size="small"
            style="width: 100%; margin-bottom: 20px;"
            class="login-form-register-btn"
          >
            注册
          </n-button>
        </n-space>
      </n-form>
    </n-config-provider>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref,reactive, watch, defineAsyncComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { IconUser, IconKey } from '@/icons'

const validateUsername = (rule: any, value: string, callback: Function) => {
  if (value.length<5||value.length>20) {
    callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}

const validatePassword = (rule: any, value: string, callback: Function) => {
  if (value.length < 6) {
    callback(new Error('密码不能少于6位'))
  } else {
    callback()
  }
}

const getOtherQuery = (query: any) => {
  return Object.keys(query).reduce((acc: any, cur) => {
    if (cur !== 'redirect') {
      acc[cur] = query[cur]
    }
    return acc
  }, {})
}

export default defineComponent({
  name: 'Login',
  components: {
    BackgroundParticles: defineAsyncComponent(() => import('./background-particles.vue')),
    IconUser,
    IconKey,
  },
  setup() {
    const userStore = useUserStore()

    const loginForm = ref({
      username: '',
      password: '',
    })
    let errorMessage = ref('')
    const loginRules = ref({
      username: [{ required: true, trigger: 'blur', validator: validateUsername }],
      password: [{ required: true, trigger: 'blur', validator: validatePassword }],
    })

    const loginFormRef = ref(null)
    const capsTooltip = ref(false)
    const loading = ref(false)
    const redirect = ref('')
    const otherQuery = ref({})

    const route = useRoute()
    const router = useRouter()

    watch(route, ({ query }) => {
      if (query) {
        redirect.value = query.redirect as string
        otherQuery.value = getOtherQuery(query)
      }
    }, { immediate: true })

    const checkCapslock = ({ shiftKey, key }: any) => {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          capsTooltip.value = true
        } else {
          capsTooltip.value = false
        }
      }

      if (key === 'CapsLock' && capsTooltip.value === true) {
        capsTooltip.value = false
      }
    }

    const handleLogin = () => {
      (loginFormRef.value as any).validate((errors: any) => {
        if (!errors) {
          loading.value = true
          userStore.login(loginForm.value.username, loginForm.value.password)
            .then(() => {
              router.push({ path: redirect.value || '/', query: otherQuery.value })
            })
            .finally(() => {
              loading.value = false
            })
        }
      })
    }
    const rememberPassword = ref(false)
    const setRememberPassword = ()=>{

    }
    return {
      loginForm,
      loginRules,
      loginFormRef,
      capsTooltip,
      loading,
      checkCapslock,
      handleLogin,
      errorMessage,
      rememberPassword,
      setRememberPassword,
    }
  },
})
</script>

<style lang="scss" scoped>

.login-form {
      &-wrapper {
        width: 320px;
      }

      &-title {
        color: #1d2129;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
      }

      &-sub-title {
        color: #86909c;
        margin-bottom: 12px;
        font-size: 16px;
        line-height: 24px;
      }

      &-error-msg {
        height: 32px;
        color: #d03050;
        line-height: 32px;
      }

      &-password-actions {
        display: flex;
        justify-content: space-between;
      }

      &-register-btn {
        color:#86909c !important;
      }
    .login-form-password-actions{
        margin-bottom: 12px;
    }
    }
.login-container {
  width: 100%;
  min-height: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #111222;

  .login-form {
    position: relative;
    width: 480px;
    max-width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    overflow: hidden;
  }


  .lang-select {
    float: right;
    margin-top: -24px;
    cursor: pointer;
    color: #bcc9d4;
  }
}
</style>
