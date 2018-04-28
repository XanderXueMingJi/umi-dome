//直接运行 umi dev   http://localhost:8000/

// 在dist 运行 serve   http://localhost:5000

import Link from "umi/link"; //声明式 路由跳转
export default () => (
  <div>
    Index Page, hello xmj<Link to="/list">Go to list page</Link>
  </div>
);
