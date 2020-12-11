<template>
    <ol class="todo-list-item">
        <div class="todo-list-item-description" :class="{ 'isDone': isDone }">
            <input type="text" v-model="editDescription" v-if="isEdit">
            <span v-else>
                {{description}}
            </span>
        </div>
        <slot name="slot-filho">
            Slot
        </slot>
        <icon class="todo-list-item-icon" icon="check-circle" @click="onClickDone" />
        <icon class="todo-list-item-icon" icon="pencil-alt"   @click="onClickEdit" />
        <icon class="todo-list-item-icon" icon="trash-alt"    @click="onClickDelete"/>
    </ol>
</template>
<script>
export default {
    name: 'TodoListItem',
    props: {
        description: String,
        isDone: Boolean
    },
    data() {
        return {
            isEdit: false,
            editDescription: ''
        }
    },
    methods: {
        onClickDone() {
            this.$emit('done')
        },
        onClickEdit() {
            this.isEdit = !this.isEdit

            if (!this.isEdit && this.editDescription) {
                const description = this.editDescription
                this.$emit('edit', description)
                this.editDescription = ''
            }
        },
        onClickDelete() {
            this.$emit('delete')
        }
    }
}
</script>
<style lang="scss" scoped>
.todo-list-item {
    flex: 1;
    display: inline-flex;
    padding: 10px;
    border: 1px solid #7d7d7d;
    border-radius: 5px;
    margin: 10px;


    &-description {
        flex: 1;
        text-align: start;

        &.isDone {
            text-decoration: line-through;
        }
    }

    &-icon {
        margin: 0 5px;
        cursor: pointer;
    }
}
</style>
