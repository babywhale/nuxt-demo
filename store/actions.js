import service from '~/service'

export const getHotPages = async ({commit}) => {
    let response =  await service.get('hotpages')
    commit('setHotpages', response);
}