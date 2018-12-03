import service from '~/service'

export const getHotPages = async ({commit}) => {
    let response =  await service.get('https://i-xapi.xinmanhua.net/hotpages')
    commit('setHotpages', response);
}

export const getRollings = async ({commit}) => {
    let response =  await service.get('rollingGroups?include=rollingItems')
    commit('setRollings', response);
}

export const getWeekqas = async ({commit}) => {
    let response =  await service.get('weekqaGroups?include=weekqaItems')
    commit('setWeekqas', response);
}

export const getWorks = async ({commit}, params) => {
    let response =  await service.get('works', params)
    commit('setWorks', response);
}