<template>
  <div class="register-form-wrapper">
    <div class="register-form-title">注册</div>
    <div class="register-form-sub-title">注册平台</div>
    <div class="register-form-error-msg">{{ errorMessage }}</div>
    <a-form
        ref="registerForm"
        :model="userInfo"
        class="register-form"
        layout="vertical"
        @submit="handleSubmit"
    >
      <a-form-item
          field="username"
          :rules="[{ required: true, message: '用户名必填'}]"
          :validate-trigger="['change', 'blur']"
          hide-label
      >
        <a-input
            v-model="userInfo.username"
            :placeholder="'请输入用户名'"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
          field="email"
          :rules="[{ required: true, message: '电子邮箱必填'}, { type: 'email', message: '请输入正确的电子邮箱格式' }]"
          :validate-trigger="['change', 'blur']"
          hide-label
      >
        <a-input
            v-model="userInfo.email"
            :placeholder="'请输入电子邮箱'"
        >
          <template #prefix>
            <icon-message />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
          field="password"
          :rules="[{ required: true, message: '密码必填'}]"
          :validate-trigger="['change', 'blur']"
          hide-label
      >
        <a-input-password
            v-model="userInfo.password"
            placeholder="请输入密码"
            allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item
          field="confirmPassword"
          :rules="[{ required: true, message: '确认密码必填'}, { validator: validateConfirmPassword }]"
          :validate-trigger="['change', 'blur']"
          hide-label
      >
        <a-input-password
            v-model="userInfo.confirmPassword"
            placeholder="请确认密码"
            allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item
          field="invitationCode"
          :rules="[{ required: true, message: '邀请码必填'}]"
          :validate-trigger="['change', 'blur']"
          hide-label
      >
        <a-input
            v-model="userInfo.invitationCode"
            :placeholder="'请输入邀请码'"
        >
          <template #prefix>
            <icon-gift />
          </template>
        </a-input>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <a-button type="primary" html-type="submit" long :loading="loading">
          注册
        </a-button>
        <a-button type="text" long class="register-form-login-btn" @click="router.push('/login')">
          返回登录
        </a-button>
      </a-space>
      <recaptcha ref="captcha" @token-generated="handleTokenGenerated"/>

    </a-form>
  </div>
</template>
<script setup lang="ts">
import {getCurrentInstance, reactive, ref, Ref} from 'vue';
import {useRouter} from 'vue-router';
import {ValidatedError} from '@arco-design/web-vue/es/form/interface';
import {useUserStore} from "@/store/userStore";
import type {RegisterData} from '@/api/user';
import {IconGift, IconLock, IconMessage, IconUser} from "@arco-design/web-vue/es/icon";
import recaptcha from "@/components/recaptcha/index.vue";

const router = useRouter();
const errorMessage = ref('');
const userStore = useUserStore();
const loading = ref(false);

const userInfo = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  invitationCode: '',
});
const captcha: Ref<typeof recaptcha | null> = ref(null);

const handleTokenGenerated = (token: string) => {
  console.log(token);
};
const Message=getCurrentInstance()?.appContext.config.globalProperties.$message;
const validateConfirmPassword = async (value: any, cb: any) => {
  if (value !== userInfo.password) {
    cb('两次输入的密码不一致');
  }
};

const handleSubmit = async ({
                              errors,
                              values,
                            }: {
  errors: Record<string, ValidatedError> | undefined;
  values: Record<string, any>;
}) => {
  if (loading.value) return;
  if (!errors) {
    loading.value = true;
    try {
      values.captcha_token = await captcha.value!.verify();

      await userStore.register(values as RegisterData);
      Message?.success('注册成功！');
      router.push('/login');
    } catch (err) {
      errorMessage.value = (err as Error).message;
    } finally {
      loading.value = false;
    }
  }
};
</script>

<style scoped lang="less">
.register-form {
  &-wrapper {
    width: 320px;
  }

  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-login-btn {
    color: var(--color-text-3) !important;
  }
}
</style>