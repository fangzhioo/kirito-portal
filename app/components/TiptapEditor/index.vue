<template>
  <client-only>
    <div class="editor">
      <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
        <div class="menubar">
          <button class="menubar__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
            <icon name="mdi-format-bold" />
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
            <icon name="mdi-format-italic" />
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
            <icon name="mdi-format-underline" />
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
            <icon name="mdi-format-strikethrough" />
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.code() }" @click="commands.code">
            <icon name="mdi-code-tags" />
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.paragraph() }" @click="commands.paragraph">
            <icon name="mdi-format-paragraph" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            <icon name="mdi-format-header-1" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            <icon name="mdi-format-header-2" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            <icon name="mdi-format-header-3" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <icon name="mdi-format-list-bulleted" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <icon name="mdi-format-list-bulleted" />
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.todo_list() }" @click="commands.todo_list">
            <icon name="mdi-format-list-bulleted" />
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
            <icon name="mdi-message-processing" />
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.code_block() }" @click="commands.code_block">
            <icon name="mdi-code-braces" />
          </button>

          <button class="menubar__button" @click="commands.horizontal_rule">
            <icon name="mdi-minus" />
          </button>

          <button class="menubar__button" @click="commands.undo">
            <icon name="mdi-undo-variant" />
          </button>

          <button class="menubar__button" @click="commands.redo">
            <icon name="mdi-redo-variant" />
          </button>

          <button class="menubar__button" @click="showImagePrompt(commands.image)">
            <icon name="mdi-image-area" />
          </button>

          <button
            class="menubar__button"
            @click="commands.createTable({ rowsCount: 3, colsCount: 3, withHeaderRow: false })"
          >
            <icon name="mdi-table" />
          </button>

          <span v-if="isActive.table()">
            <button class="menubar__button" @click="commands.deleteTable">
              <icon name="mdi-tab-unselected" />
            </button>
            <button class="menubar__button" @click="commands.addColumnBefore">
              <icon name="mdi-table-column-plus-before" />
            </button>
            <button class="menubar__button" @click="commands.addColumnAfter">
              <icon name="mdi-table-column-plus-after" />
            </button>
            <button class="menubar__button" @click="commands.deleteColumn">
              <icon name="mdi-table-column-remove" />
            </button>
            <button class="menubar__button" @click="commands.addRowBefore">
              <icon name="mdi-table-row-plus-before" />
            </button>
            <button class="menubar__button" @click="commands.addRowAfter">
              <icon name="mdi-table-row-plus-after" />
            </button>
            <button class="menubar__button" @click="commands.deleteRow">
              <icon name="mdi-table-row-remove" />
            </button>
            <button class="menubar__button" @click="commands.toggleCellMerge">
              <icon name="mdi-table-row-height" />
            </button>
          </span>
        </div>
      </editor-menu-bar>

      <div class="search">
        <input
          ref="search"
          v-model="searchTerm"
          placeholder="Search …"
          type="text"
          @keydown.enter.prevent="editor.commands.find(searchTerm)"
        />
        <input
          v-model="replaceWith"
          placeholder="Replace …"
          type="text"
          @keydown.enter.prevent="editor.commands.replace(replaceWith)"
        />
        <button class="button" @click="editor.commands.find(searchTerm)">
          Find
        </button>
        <button class="button" @click="editor.commands.clearSearch()">
          Clear
        </button>
        <button class="button" @click="editor.commands.replace(replaceWith)">
          Replace
        </button>
        <button class="button" @click="editor.commands.replaceAll(replaceWith)">
          Replace All
        </button>
      </div>

      <editor-content class="editor__content" :editor="editor" />
    </div>
  </client-only>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  // Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  TrailingNode,
  Placeholder,
  Search,
  Image,
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from 'tiptap-extensions';
import Icon from './Icon';
import TocHeading from './extensions/TocHeading';
import CodeBlockHighlight from './extensions/CodeBlockHighlight';
import Iframe from './extensions/Iframe';
import Doc from './extensions/Doc';
import Title from './extensions/Title';

export default {
  components: {
    EditorContent,
    EditorMenuBar,
    Icon,
  },
  props: {
    value: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      editor: null,
      searchTerm: null,
      replaceWith: null,
      html: ``,
      json: ``,
    };
  },
  watch: {
    value(newV, oldV) {
      // 监听外部变化
      if (newV !== oldV && this.editor && !this.editor.focused) {
        this.editor.setContent(newV, false);
      }
    },
  },
  mounted() {
    this.editor = new Editor({
      onUpdate: ({ getHTML, getJSON }) => {
        // get new content on update
        this.html = getHTML();
        this.json = getJSON();
        this.$emit('input', this.html);
      },
      extensions: [
        new CodeBlockHighlight(),
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new TocHeading({ levels: [1, 2, 3] }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem({
          nested: true,
        }),
        new TodoList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
        // 在尾部默认添加一个空行
        new TrailingNode({
          node: 'paragraph',
          notAfter: ['paragraph'],
        }),
        new Doc(),
        new Title(),
        new Placeholder({
          showOnlyCurrent: false,
          emptyNodeText: (node) => {
            if (node.type.name === 'title') {
              return 'Give me a title';
            }
            return 'Write something';
          },
        }),
        new Search({
          disableRegex: false,
        }),
        new Image(),
        new Table({
          resizable: true,
        }),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        // custom Node
        new Iframe(),
      ],
      content: this.value,
    });
  },
  beforeDestroy() {
    // Always destroy your editor instance when it's no longer needed
    this.editor.destroy();
  },
  methods: {
    showImagePrompt(command) {
      const src = prompt(
        'Enter the url of your image here',
        'https://66.media.tumblr.com/dcd3d24b79d78a3ee0f9192246e727f1/tumblr_o00xgqMhPM1qak053o1_400.gif'
      );
      if (src !== null) {
        command({ src });
      }
    },
  },
};
</script>

<style lang="scss" src="./index.scss"></style>
