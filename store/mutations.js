import { JsonApiDataStore } from 'jsonapi-datastore'

function resolveData(data, type, isSingle, sort) {
    if (!type) {
        return data
    }
    else {
        let store = new JsonApiDataStore()
        let res = store.syncWithMeta(data)
        if (isSingle) {
            return store.findAll(type)[0]
        }
        else {
            let info = store.findAll(type)
            if (sort && info && info.length > 0) {
                info.sort(sort)
            }
            return info
        }
    }
}

export function setHotpages(state, payload) {
    this.state.hotpages = resolveData(payload, 'hotpages', true)
}

export function setRollings(state, payload) {
    this.state.rollings = resolveData(payload, 'rollingGroups', true)
}

export function setWeekqas(state, payload) {
    let newList = resolveData(payload, 'weekqaGroups', false, (a, b) => a.starttime < b.starttime ? 1 : -1)
    if (!this.state.weekqas) {
        this.state.weekqas = []
    }
    this.state.weekqas = this.state.weekqas.concat(newList)
}

export function setWorks(state, payload) {
    let newList = resolveData(payload, 'works')
    if (!this.state.works) {
        this.state.works = []
    }
    this.state.works = this.state.works.concat(newList)
}