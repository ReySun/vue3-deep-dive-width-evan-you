import { h } from "vue"

const vIf = {
  render() {
    // v-if="ok"
    let nodeToReturn
    if (this.ok) {
      // nodeToReturn = ...
    } else if (this.otherCondition) {
      // nodeToReturn = ...
    }

    return this.ok
      ? h("div", { id: "hello" }, [h("span", "world")])
      : this.otherCondition
      ? h("p", "other condition")
      : h("span")
  },
};

const vForIn = {
  render() {
    // v-for="item in list"
    let nodeToReturn;
    return this.list.map((item) => {
      return h("div", { key: item.id }, item.text)
    })
  }
}

const Stack = {
  render() {
    // slot
    const slot = this.$slot.default 
      ? this.$slot.default()
      : []

    slot.map(vnode => {
      return h("div", { class: "stack" }, slot.map(child => {
        return h("div", { class: `mt-${this.$props.size}` }, [
          child
        ])
      }))
    })
  }
}


(
<Stack size="4">
  <div>hello</div>
  <Stack size="4">
    <div>hello</div>
    <div>hello</div>
  </Stack>
</Stack>
)

// tobe

(
<div size="4">
  <div class="mt-4">
    <div>hello</div>
  </div>
  <div size="4">
    <div class="mt-4">
      <div>hello</div>
    </div>
    <div class="mt-4">
      <div>hello</div>
    </div>
  </div>
</div>
)