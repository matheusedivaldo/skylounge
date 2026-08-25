<x-filament-widgets::widget>
    <x-filament::section
        icon="heroicon-o-envelope"
        icon-color="primary"
        heading="E-mail da empresa"
        description="Acesso rápido ao webmail do domínio skygastrobar.com.br."
        class="sky-webmail-widget"
    >
        <div
            x-data="{
                copiedField: null,
                showPassword: false,
                copy(text, field) {
                    navigator.clipboard.writeText(text);
                    this.copiedField = field;
                    setTimeout(() => { if (this.copiedField === field) this.copiedField = null }, 1600);
                },
            }"
            class="sky-webmail-widget__body"
        >
            <div class="sky-webmail-widget__field">
                <span class="sky-webmail-widget__label">E-mail</span>

                <div class="sky-webmail-widget__value-row">
                    <span class="sky-webmail-widget__value">{{ $this->getWebmailEmail() }}</span>

                    <button
                        type="button"
                        class="sky-webmail-widget__icon-btn"
                        x-on:click="copy(@js($this->getWebmailEmail()), 'email')"
                        x-tooltip="copiedField === 'email' ? 'Copiado!' : 'Copiar e-mail'"
                    >
                        <x-filament::icon icon="heroicon-o-clipboard" x-show="copiedField !== 'email'" class="sky-webmail-widget__icon" />
                        <x-filament::icon icon="heroicon-o-clipboard-document-check" x-show="copiedField === 'email'" x-cloak class="sky-webmail-widget__icon sky-webmail-widget__icon--success" />
                    </button>
                </div>
            </div>

            <div class="sky-webmail-widget__field">
                <span class="sky-webmail-widget__label">Senha</span>

                <div class="sky-webmail-widget__value-row">
                    <span class="sky-webmail-widget__value sky-webmail-widget__value--password">
                        <span x-show="showPassword">{{ $this->getWebmailPassword() }}</span>
                        <span x-show="!showPassword">••••••••</span>
                    </span>

                    <button
                        type="button"
                        class="sky-webmail-widget__icon-btn"
                        x-on:click="showPassword = !showPassword"
                        x-tooltip="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
                    >
                        <x-filament::icon icon="heroicon-o-eye" x-show="!showPassword" class="sky-webmail-widget__icon" />
                        <x-filament::icon icon="heroicon-o-eye-slash" x-show="showPassword" x-cloak class="sky-webmail-widget__icon" />
                    </button>

                    <button
                        type="button"
                        class="sky-webmail-widget__icon-btn"
                        x-on:click="copy(@js($this->getWebmailPassword()), 'password')"
                        x-tooltip="copiedField === 'password' ? 'Copiado!' : 'Copiar senha'"
                    >
                        <x-filament::icon icon="heroicon-o-clipboard" x-show="copiedField !== 'password'" class="sky-webmail-widget__icon" />
                        <x-filament::icon icon="heroicon-o-clipboard-document-check" x-show="copiedField === 'password'" x-cloak class="sky-webmail-widget__icon sky-webmail-widget__icon--success" />
                    </button>
                </div>
            </div>

            <x-filament::button
                tag="a"
                :href="$this->getWebmailUrl()"
                target="_blank"
                icon="heroicon-o-arrow-top-right-on-square"
                icon-position="after"
                class="sky-webmail-widget__cta"
            >
                Abrir Webmail
            </x-filament::button>
        </div>
    </x-filament::section>
</x-filament-widgets::widget>
