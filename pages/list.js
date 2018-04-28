import router from 'umi/router'; //命令式
export default () => (
  <div>
    hello ,我是 list xmj
    <button onClick={() => {router.push('/')} } >
        go index
    </button>
    <button onClick={() => {router.goBack(); } } >
        返回上一页
    </button>
  </div>
);