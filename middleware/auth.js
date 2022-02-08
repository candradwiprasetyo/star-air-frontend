import Vue from 'vue'

export default function ({ store, redirect }) {
    if (!store.state.isLogin) {
        // error({ statusCode: 403, message: '403 Forbidden' })
        return redirect('/login')
    }
}