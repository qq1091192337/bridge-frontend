<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">登录</div>
    <div class="login-form-sub-title">登录以使用</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form
      ref="loginForm"
      :model="userInfo"
      class="login-form"
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
      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">

          <a-link>忘记密码</a-link>
        </div>
        <a-button type="primary" html-type="submit" long :loading="loading">
          登录
        </a-button>
        <a-button type="text" long class="login-form-register-btn" @click="router.push('/register')">
          注册
        </a-button>
      </a-space>
      <recaptcha ref="captcha" @token-generated="handleTokenGenerated"/>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref, Ref} from 'vue';
import {useRouter} from 'vue-router';
import {Message} from '@arco-design/web-vue';
import {ValidatedError} from '@arco-design/web-vue/es/form/interface';
import {useUserStore} from "@/store/userStore";
import type {LoginData} from '@/api/user';
import {IconLock, IconUser} from "@arco-design/web-vue/es/icon";
import recaptcha from "@/components/recaptcha/index.vue";
import {Notification} from "@arco-design/web-vue";
const router = useRouter();
  const errorMessage = ref('');
  const userStore = useUserStore();
  const loading = ref(false);
  const captcha: Ref<typeof recaptcha | null> = ref(null);
  const userInfo = reactive({
    username: '',
    password: '',
  });
  const handleTokenGenerated = (token: string) => {
    console.log(token);
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
      loading.value=true;
      try {
        values.captcha_token=await captcha.value!.verify();

        const loginData :{code:number}= await userStore.login(values as LoginData);
        console.log(loginData);
        const { redirect,reason, ...othersQuery } = router.currentRoute.value.query;
        router.push({
          path: (redirect as string) || '/dashboard',
          query: {
            ...othersQuery,
          },
        });
        Message.success('登录成功！');

      } catch (err) {
        errorMessage.value = (err as Error).message;
        console.error(err);
      } finally {
        loading.value=false;
      }
    }
  };
onMounted(() => {

  if (router.currentRoute.value.query.reason) {
    Notification.error({
      title: '访问失败',
      content:  router.currentRoute.value.query.reason as string,
    });
  }
});
</script>

<style lang="less" scoped>
  .login-form {
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

    &-password-actions {
      display: flex;
      justify-content: space-between;
    }

    &-register-btn {
      color: var(--color-text-3) !important;
    }
  }
</style>
