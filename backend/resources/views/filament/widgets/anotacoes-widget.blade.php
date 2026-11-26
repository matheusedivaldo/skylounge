@php($anotacoes = $this->getAnotacoes())

@if ($anotacoes->isNotEmpty())
    <x-filament-widgets::widget>
        <div class="sky-webmail-widget-grid">
            @foreach ($anotacoes as $anotacao)
                <x-filament::section
                    icon="{{ $anotacao->icone ?: 'heroicon-o-key' }}"
                    icon-color="primary"
                    heading="{{ $anotacao->titulo }}"
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
                        @if ($anotacao->usuario)
                            <div class="sky-webmail-widget__field">
                                <span class="sky-webmail-widget__label">Usuário</span>

                                <div class="sky-webmail-widget__value-row">
                                    <span class="sky-webmail-widget__value">{{ $anotacao->usuario }}</span>

                                    <button
                                        type="button"
                                        class="sky-webmail-widget__icon-btn"
                                        x-on:click="copy(@js($anotacao->usuario), 'usuario')"
                                        x-tooltip="copiedField === 'usuario' ? 'Copiado!' : 'Copiar usuário'"
                                    >
                                        <x-filament::icon icon="heroicon-o-clipboard" x-show="copiedField !== 'usuario'" class="sky-webmail-widget__icon" />
                                        <x-filament::icon icon="heroicon-o-clipboard-document-check" x-show="copiedField === 'usuario'" x-cloak class="sky-webmail-widget__icon sky-webmail-widget__icon--success" />
                                    </button>
                                </div>
                            </div>
                        @endif

                        @if ($anotacao->senha)
                            <div class="sky-webmail-widget__field">
                                <span class="sky-webmail-widget__label">Senha</span>

                                <div class="sky-webmail-widget__value-row">
                                    <span class="sky-webmail-widget__value sky-webmail-widget__value--password">
                                        <span x-show="showPassword">{{ $anotacao->senha }}</span>
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
                                        x-on:click="copy(@js($anotacao->senha), 'senha')"
                                        x-tooltip="copiedField === 'senha' ? 'Copiado!' : 'Copiar senha'"
                                    >
                                        <x-filament::icon icon="heroicon-o-clipboard" x-show="copiedField !== 'senha'" class="sky-webmail-widget__icon" />
                                        <x-filament::icon icon="heroicon-o-clipboard-document-check" x-show="copiedField === 'senha'" x-cloak class="sky-webmail-widget__icon sky-webmail-widget__icon--success" />
                                    </button>
                                </div>
                            </div>
                        @endif

                        @if ($anotacao->link)
                            <x-filament::button
                                tag="a"
                                :href="$anotacao->link"
                                target="_blank"
                                icon="heroicon-o-arrow-top-right-on-square"
                                icon-position="after"
                                class="sky-webmail-widget__cta"
                            >
                                {{ $anotacao->texto_botao ?: 'Abrir' }}
                            </x-filament::button>
                        @endif
                    </div>
                </x-filament::section>
            @endforeach
        </div>
    </x-filament-widgets::widget>
@endif
