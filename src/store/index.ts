import { makePersistable } from 'mobx-persist-store'

export const appStore = makeAutoObservable({
  count: 0,
  get doubleCount() {
    return this.count * 2
  },
  add() {
    this.count++
  },
  async asyncAdd() {
    setTimeout(() => {
      runInAction(() => {
        this.count += 2
      })
    }, 1000)
  },
})

makePersistable(appStore, {
  name: 'appStore',
  storage: window.sessionStorage,
  properties: ['count'],
})
