<template>
  <div>
    <div>引用块</div>
    <template>
      <blockquote class="blockquote">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores
        modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
        iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab
        at.
      </blockquote>
    </template>
    <v-divider />
    <div>段落</div>
    <template>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          maiores modi quidem veniam, expedita quis laboriosam, ullam facere
          adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo
          numquam fuga ab at.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          maiores modi quidem veniam, expedita quis laboriosam, ullam facere
          adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo
          numquam fuga ab at.
        </p>
      </div>
    </template>
    <v-divider />
    <div>代码块</div>
    <template>
      <div>Example of an inline <code>&lt;code&gt;</code> element.</div>
    </template>
    <v-divider />
    <div>变量</div>
    <template>
      <div><var>v</var> = <var>u</var> * <var>e</var></div>
    </template>
    <v-divider />
    <div>用户输入</div>
    <template>
      <div>
        To install Vuetify, type <kbd>npm install vuetify</kbd> into your
        console. Once complete, type
        <kbd>cd <code>&lt;project name&gt;</code></kbd> and run
        <kbd>npm install</kbd>
      </div>
    </template>
    <v-divider />
    <div>圆角</div>
    <template>
      <v-container>
        <v-row justify="center">
          <v-col
            v-for="value in ['-sm', '', '-lg', '-xl']"
            :key="value"
            cols="12"
            md="2"
          >
            <div
              :class="`rounded${value}`"
              class="pa-6 text-center grey lighten-2"
              v-text="`.rounded${value}`"
            ></div>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <v-divider />
    <div>颜色</div>
    <template>
      <div>
        Lorem ipsum dolor sit amet,
        <strong class="red--text text--lighten-1">inciderint</strong>
        definitionem est ea, explicari
        <span class="cyan--text text--darken-1">prodesset eam id</span>. Mazim
        doctus vix an.
        <span class="indigo--text text--darken-2"
          >Amet causae probatus nec ex</span
        >.
      </div>
    </template>
    <v-divider />
    <div>显示 - 响应式</div>
    <template>
      <div>
        <div class="d-lg-none">hide on screens wider than lg</div>
        <div class="d-none d-lg-block">hide on screens smaller than lg</div>
      </div>
    </template>
    <template>
      <div>
        <div class="d-print-none">Screen Only (Hide on print only)</div>
        <div class="d-none d-print-block">Print Only (Hide on screen only)</div>
        <div class="d-none d-lg-block d-print-block">
          Hide up to large on screen, but always show on print
        </div>
      </div>
    </template>
    <v-divider />
    <div>海拔</div>
    <template>
      <v-container>
        <v-row justify="center">
          <v-col v-for="n in 25" :key="n" cols="auto">
            <v-card :elevation="n - 1" height="100" width="100">
              <v-row
                class="fill-height"
                align="center"
                justify="center"
                v-text="n - 1"
              ></v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <v-divider />
    <div>Flex布局</div>
    <template>
      <div>
        <v-card
          v-for="j in [
            'start',
            'end',
            'center',
            'space-between',
            'space-around',
          ]"
          :key="j"
          :class="`d-flex justify-${j} mb-6`"
          color="grey lighten-2"
          flat
          tile
        >
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
            Flex item
          </v-card>
        </v-card>
      </div>
    </template>
    <v-divider />
    <div>Float布局</div>
    <template>
      <div>
        <div class="float-left">Float left on all viewport sizes</div>
        <br />
        <div class="float-right">Float right on all viewport sizes</div>
        <br />
        <div class="float-none">Don't float on all viewport sizes</div>
      </div>
    </template>
    <v-divider />
    <div>间距 Margin & Padding</div>
    <template>
      <v-container class="spacing-playground pa-6" fluid>
        <v-row>
          <v-col class="d-flex align-center" cols="12" sm="6">
            <v-select
              v-model="paddingDirection"
              :items="directions"
              class="pr-2"
              label="Padding"
            >
              <template v-slot:prepend>
                <strong class="primary--text py-1">p</strong>
              </template>

              <template v-slot:append-outer>
                <div class="py-1">-</div>
              </template>
            </v-select>

            <v-select
              v-model="paddingSize"
              :items="paddingSizes.slice(1)"
              label="Size"
            ></v-select>
          </v-col>

          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              v-model="marginDirection"
              :items="directions"
              class="pr-2"
              label="Margin"
            >
              <template v-slot:prepend>
                <strong class="primary--text py-1">m</strong>
              </template>

              <template v-slot:append-outer>
                <div class="py-1">-</div>
              </template>
            </v-select>

            <v-select
              v-model="marginSize"
              :items="marginSizes"
              label="Size"
            ></v-select>
          </v-col>

          <v-col class="orange lighten-3 pa-0" cols="12">
            <v-sheet :class="[computedMargin]" elevation="4" rounded>
              <div :class="[computedPadding]" class="light-green lighten-3">
                <div
                  class="white text-center py-6"
                  v-text="playgroundText"
                ></div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <v-divider />
    <div>文字</div>
    <template>
      <v-item-group mandatory>
        <v-sheet class="overflow-y-auto" max-height="600" tile>
          <v-item
            v-for="[c, text, size, weight, spacing, margin] in classes"
            :key="c"
          >
            <template v-slot="{ active, toggle }">
              <v-sheet
                :color="active ? 'grey lighten-4' : undefined"
                class="px-4 pt-4 pb-3"
                tile
                style="cursor: pointer;"
                @click="toggle"
              >
                <div
                  :class="[`text-${c}`, active && `mb-${margin}`]"
                  class="transition-swing"
                  v-text="text"
                ></div>

                <v-expand-transition>
                  <v-responsive v-if="active" max-width="350">
                    <div class="d-flex justify-space-between caption">
                      <div>
                        <div class="grey--text mb-2">
                          Font
                        </div>

                        <div class="font-weight-medium">Roboto</div>
                      </div>

                      <div>
                        <div class="grey--text mb-2">
                          Weight
                        </div>

                        <div class="font-weight-medium" v-text="weight"></div>
                      </div>

                      <div>
                        <div class="grey--text mb-2">
                          Size
                        </div>

                        <div class="font-weight-medium" v-text="size"></div>
                      </div>

                      <div>
                        <div class="grey--text text-darken-1 mb-2">
                          Letter spacing
                        </div>

                        <div class="font-weight-medium" v-text="spacing"></div>
                      </div>
                    </div>
                  </v-responsive>
                </v-expand-transition>
              </v-sheet>
            </template>
          </v-item>
        </v-sheet>
      </v-item-group>
    </template>
    <template>
      <div>
        <a href="#" class="text-decoration-none">Non-underlined link</a>

        <div class="text-decoration-line-through">Line-through text</div>

        <div class="text-decoration-overline">Overline text</div>

        <div class="text-decoration-underline">Underline text</div>
      </div>
    </template>
    <template>
      <div>
        <p class="text-lowercase">Lowercased text.</p>
        <p class="text-uppercase">Uppercased text.</p>
        <p class="text-capitalize">CapiTaliZed text.</p>
      </div>
    </template>
    <template>
      <div>
        <p class="subtitle-2 text-center">Agnostic RTL Alignment</p>

        <p class="text-sm-left">
          Left aligned text on viewports sized SM (small) or wider for rtl or
          ltr.
        </p>
        <p class="text-md-left">
          Left aligned text on viewports sized MD (medium) or wider for rtl or
          ltr.
        </p>
        <p class="text-lg-right">
          Right aligned text on viewports sized LG (large) or wider for rtl or
          ltr.
        </p>
        <p class="text-xl-left">
          Left aligned text on viewports sized XL (extra-large) or wider for rtl
          or ltr.
        </p>

        <p class="subtitle-2 text-center">Responsive RTL Alignment</p>

        <p class="text-start">
          Left aligned text on ltr and right aligned on rtl.
        </p>
        <p class="text-end">
          Right aligned text on ltr and left aligned on rtl.
        </p>
      </div>
    </template>
    <v-divider />
    <v-divider />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    const spacers = Array.from({ length: 17 }, (_val, i) => `${i}`)
    const nspacers = Array.from({ length: 16 }, (_val, i) => `n${i + 1}`)
    const defaults = ['auto', ...spacers]

    return {
      directions: ['t', 'b', 'l', 'r', 's', 'e', 'x', 'y', 'a'],
      marginDirection: 'a',
      marginSize: '2',
      marginSizes: [...defaults, ...nspacers],
      paddingDirection: 'a',
      paddingSize: '6',
      paddingSizes: defaults,
      playgroundText:
        'Use the controls above to try out the different spacing helpers.',
      model: null,
      classes: [
        ['h1', 'Heading 1', '6rem', '300', '-0.09375rem', -1],
        ['h2', 'Heading 2', '3.75rem', '300', '-0.03125rem', 0],
        ['h3', 'Heading 3', '3rem', '400', 'normal', 1],
        ['h4', 'Heading 4', '2.125rem', '400', '0.015625rem', 2],
        ['h5', 'Heading 5', '1.5rem', '400', 'normal', 2],
        ['h6', 'Heading 6', '1.25rem', '500', '0.009375rem', 3],
        ['subtitle-1', 'Subtitle 1', '1rem', '400', '0.009375rem', 4],
        ['subtitle-2', 'Subtitle 2', '0.875rem', '500', '0.00625rem', 4],
        ['body-1', 'Body 1', '1rem', '400', '0.03125rem', 4],
        ['body-2', 'Body 2', '0.875rem', '400', '0.015625rem', 4],
        ['button', 'Button', '0.875rem', '500', '0.078125rem', 4],
        ['caption', 'Caption', '0.75rem', '400', '0.025rem', 4],
        ['overline', 'Overline', '0.75rem', '500', '0.1666666667em', 4],
      ],
    }
  },

  computed: {
    computedPadding() {
      return `p${this.paddingDirection}-${this.paddingSize}`
    },
    computedMargin() {
      return `m${this.marginDirection}-${this.marginSize}`
    },
  },
})
</script>
