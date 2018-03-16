import Mock from 'mockjs'

Mock.mock('/customer', {
    'name': '@name',
    'customers': 100,
    'color': '@color'
});