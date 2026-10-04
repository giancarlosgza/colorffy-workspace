<script setup lang="ts">
definePageMeta({ layout: 'auth', pageTitle: 'Sign in' })

type Step = 'credentials' | 'loading' | 'verify'

const step = ref<Step>('credentials')
const email = ref<string | number | null>('')
const password = ref<string | null>('')
const remember = ref<string | boolean | null>(true)
const emailErrors = ref<string[]>([])
const passwordErrors = ref<string[]>([])
const resetSentTo = ref<string | null>(null)
const googleLoading = ref(false)
const code = ref('')
const opening = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

const highlights = [
  'Boards, timelines and docs in one place',
  'Automations that keep status up to date',
  'Guests and clients see only what you share'
]

const emailText = computed(() => String(email.value ?? '').trim())

function isValidEmail(value: string): boolean {
  const [local, domain, ...rest] = value.split('@')
  return !rest.length && !!local && !!domain && domain.includes('.') && !domain.startsWith('.') && !domain.endsWith('.') && !/\s/.test(value)
}

watch(email, () => {
  emailErrors.value = []
  resetSentTo.value = null
})

watch(password, () => {
  passwordErrors.value = []
})

function signIn(): void {
  emailErrors.value = isValidEmail(emailText.value) ? [] : ['Enter a valid work email, like name@company.com.']
  passwordErrors.value = String(password.value ?? '') ? [] : ['Enter your password.']
  if (emailErrors.value.length || passwordErrors.value.length)
    return
  step.value = 'loading'
  timer = setTimeout(() => {
    step.value = 'verify'
  }, 1000)
}

function continueWithGoogle(): void {
  googleLoading.value = true
  timer = setTimeout(navigateTo, 1000, '/')
}

function sendReset(): void {
  if (!isValidEmail(emailText.value)) {
    emailErrors.value = ['Enter your work email first, and we\'ll send the reset link there.']
    return
  }
  resetSentTo.value = emailText.value
}

function verify(): void {
  opening.value = true
  navigateTo('/')
}

function backToCredentials(): void {
  code.value = ''
  step.value = 'credentials'
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <div class="d-grid grid-repeat-cols-1 grid-repeat-cols-lg-2 min-dvh-100">
    <!-- Brand -->
    <aside class="d-none d-lg-flex flex-column justify-content-between gap-5 p-5 bg-primary text-on-primary">
      <div class="d-flex align-items-center gap-2">
        <span class="logo-mark d-grid place-items-center rounded-md fw-800 bg-primary-container text-on-primary-container" aria-hidden="true">O</span>
        <span class="fs-lg fw-800">{{ workspace.name }}</span>
      </div>

      <div>
        <p class="display-3 mb-3">
          Plan, track and ship together
        </p>
        <p class="fs-base mb-4">
          One workspace for roadmaps, sprints and the conversations around them.
        </p>
        <div class="d-grid gap-2">
          <div v-for="item in highlights" :key="item" class="d-flex align-items-center gap-2">
            <UiIconMaterial icon-code="&#xe86c;" class="fs-lg" />
            <span class="fs-xs fw-500">{{ item }}</span>
          </div>
        </div>
      </div>

      <figure class="m-0 p-4 rounded-lg bg-primary-container text-on-primary-container">
        <blockquote class="m-0">
          <p class="fs-base fw-500 mb-3">
            “We moved three product squads to Orbit in a week. Our Monday status meeting went from an hour to ten minutes.”
          </p>
        </blockquote>
        <figcaption class="d-flex align-items-center gap-3">
          <UiAvatar initials="PN" color="accent" variant="filled" size="menu" />
          <span class="d-grid">
            <span class="fw-700 fs-xs">Priya Nair</span>
            <span class="caption">Head of Product, Lumen Health</span>
          </span>
        </figcaption>
      </figure>
    </aside>

    <!-- Form -->
    <section class="d-flex flex-column align-items-center justify-content-center p-4 p-md-5">
      <div class="w-100 max-w-sm">
        <div class="d-flex d-lg-none align-items-center gap-2 mb-5">
          <span class="logo-mark d-grid place-items-center rounded-md fw-800 bg-primary text-on-primary" aria-hidden="true">O</span>
          <span class="fs-lg fw-800">{{ workspace.name }}</span>
        </div>

        <template v-if="step === 'credentials'">
          <h1 class="fs-2xl fw-800 mb-1">
            Welcome back
          </h1>
          <p class="text-muted mb-4">
            Sign in to the {{ workspace.name }} workspace for your team.
          </p>

          <UiButton
            text="Continue with Google"
            variant="outline"
            size="lg"
            fluid
            :loading="googleLoading"
            @click="continueWithGoogle"
          >
            <template #icon>
              <UiIconSvg :content="brandIcons.google" size="xs" />
            </template>
          </UiButton>

          <UiDivider text="or" custom-class="my-4" />

          <form novalidate @submit.prevent="signIn">
            <UiInputText
              id="sign-in-email"
              v-model="email"
              type="email"
              label="Work email"
              placeholder="name@company.com"
              :maxlength="80"
              :error-messages="emailErrors"
            />
            <UiInputPassword
              id="sign-in-password"
              v-model="password"
              label="Password"
              placeholder="Enter your password"
              :maxlength="64"
              :error-messages="passwordErrors"
            />

            <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4">
              <UiInputCheck id="sign-in-remember" v-model="remember" label="Remember me for 30 days" class="mb-0" />
              <a href="#" class="caption fw-700" @click.prevent="sendReset">Forgot password?</a>
            </div>

            <div
              v-if="resetSentTo"
              class="bg-info-container text-on-info-container rounded-lg p-3 d-flex align-items-start gap-2 mb-4"
              role="status"
            >
              <UiIconMaterial icon-code="&#xe158;" class="fs-lg" />
              <p class="caption mb-0">
                If an account exists for {{ resetSentTo }}, a reset link is on its way. It expires in 30 minutes.
              </p>
            </div>

            <UiButton
              type="submit"
              text="Sign in"
              variant="filled"
              color="primary"
              size="lg"
              fluid
            />
          </form>
        </template>

        <UiLoading
          v-else-if="step === 'loading'"
          title="Signing you in"
          subtitle="Checking your credentials…"
          spinner-size="48px"
          custom-class="d-grid place-items-center text-center py-5"
        />

        <template v-else>
          <span class="d-inline-flex p-2 rounded-lg bg-primary-container text-on-primary-container mb-3">
            <UiIconMaterial icon-code="&#xe0da;" class="fs-2xl lh-1" />
          </span>
          <h1 class="fs-2xl fw-800 mb-1">
            Check your authenticator
          </h1>
          <p class="text-muted mb-4">
            Enter the 6-digit code from your authenticator app to finish signing in as {{ emailText }}.
          </p>

          <UiInputOtp
            id="sign-in-code"
            v-model="code"
            label="Verification code"
            hide-label
            :length="6"
            autofocus
            :disabled="opening"
            @complete="verify"
          />
          <p class="caption text-muted mb-4">
            {{ opening ? 'Opening your workspace…' : 'Codes refresh every 30 seconds.' }}
          </p>

          <div class="d-flex flex-wrap justify-content-between gap-2">
            <UiButton text="Back" variant="text" size="sm" @click="backToCredentials">
              <template #icon>
                <UiIconMaterial icon-code="&#xe5c4;" />
              </template>
            </UiButton>
            <UiButton text="Use a recovery code" variant="text" size="sm" />
          </div>
        </template>

        <p class="caption text-muted text-center mt-5 mb-0">
          Don't have an account?
          <NuxtLink to="/billing" class="fw-700">
            Start a free trial
          </NuxtLink>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.logo-mark {
  inline-size: 2.25rem;
  aspect-ratio: 1;
}
</style>
