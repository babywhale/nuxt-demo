import { JsonApiDataStore } from 'jsonapi-datastore'

function resolveData(data, type, isSingle) {
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