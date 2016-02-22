# counter-reredux
把redux最简单的demo改成比较复杂的形式。

最初的redux的counter的这个[demo](https://github.com/reactjs/redux/tree/master/examples/counter)仅仅是提供了reducer，store，然后只用了一层组件，把store.dispatch给演示了一下，action是直接作为一句对象字面量存在的。

太简单了，虽然容易懂，但没法在实际项目上用，为了更好的理解redux的复杂应用，对原有demo进行改造，往实际项目上靠。
做的改造包括：
- 把action给独立成一个文件（夹）
- 创建根组件APP，在里面使用connect方法
- 把原来的index改成Provider包围着APP的形式
