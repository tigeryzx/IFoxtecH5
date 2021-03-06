// http://mockjs.com/
// https://www.cnblogs.com/cjt-cn/p/6594019.html

import Mock from 'mockjs'

const baseUrl = "http://localhost:3651/";

function getUrl(url) {
  return baseUrl + url;
}

Mock.setup({
  timeout: '200-400'
});

Mock.mock(getUrl('api/customer'), 'get', {
  'result|3': [{
    'name': '@province',
    'customers|3-5': [{
      customerId: '@upper(@guid)',
      name: '@cname 科技公司',
      phone: '@natural(13000000000,13999999999)',
      contact: '@cname'
    }]
  }]
});

Mock.mock(getUrl('api/contacts'), 'get', {
  'result|3': [{
    contactId: '@upper(@guid)',
    contactName: '@cname',
    position: '经理',
    mobile: '@natural(13000000000,13999999999)',
    telephone: '@natural(88000000,88999999)'
  }]
});

Mock.mock(getUrl('api/contacts/123'),'get', {
  'name': '@cname',
  'position': '主管',
  'phone': '@natural(13000000000,13999999999)',
  'tel': '@natural(88000000,88999999)',
  'email': '@email',
  'wexin': '@word(5)',
  'qq': '@natural(100000000,99999999)',
  'remark': '@csentence'
});

Mock.mock(getUrl('api/Notify'), 'get', {
  'result|3': [{
    title: '消息标题',
    desc: '@cparagraph(1, 3)',
    meta: {
      source: '通知人:@cname',
      date: '@datetime'
    }
  }]
});
