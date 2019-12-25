import { shallowMount } from '@vue/test-utils'
import Component from '@/components/TablePage.vue'

describe('TablePage.vue', () => {
  it('Является экземпляром Vue', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        currentPage: 1,
        pageSize: 10,
        totalRows: 100
      }
    })

    expect(wrapper.isVueInstance()).toEqual(true)
  })

  it('Изменение параметров', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        currentPage: 1,
        pageSize: 10,
        totalRows: 100
      }
    })

    wrapper.setProps({
      currentPage: 2,
      pageSize: 25,
      totalRows: 50
    })
    expect(wrapper.vm.currentPage).toEqual(2)
    expect(wrapper.vm.pageSize).toEqual(25)
    expect(wrapper.vm.totalRows).toEqual(50)
  })

  it('Верный расчет maxPages', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        currentPage: 1,
        pageSize: 10,
        totalRows: 100
      }
    })

    expect(wrapper.vm.maxPages).toEqual(10)
  })

  it('Есть необходимые методы', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        currentPage: 1,
        pageSize: 10,
        totalRows: 100
      }
    })

    expect(wrapper.vm.updatePage).toBeDefined()
    expect(wrapper.vm.prevPage).toBeDefined()
    expect(wrapper.vm.nextPage).toBeDefined()
  })

  it('Верное генерирование элементов на странице', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        currentPage: 1,
        pageSize: 10,
        totalRows: 100
      }
    })

    expect(wrapper.findAll('.pagination .page-link').length).toEqual(12)

    wrapper.setProps({
      currentPage: 1,
      pageSize: 25,
      totalRows: 50
    })
    expect(wrapper.findAll('.pagination .page-link').length).toEqual(4)

    wrapper.setProps({
      currentPage: 1,
      pageSize: 100,
      totalRows: 50
    })
    expect(wrapper.findAll('.pagination .page-link').length).toEqual(3)
  })
})
