import { Link } from 'react-router-dom'

export default function LeftSidebar() {
  return (
    <aside className="sider">
      <div className="group">
        <div className="g-title">快速入口</div>
        <Link to="/chat" className="item"><i className="fa fa-comments"></i> 开始聊天</Link>
        <Link to="/flow" className="item"><i className="fa fa-diagram-project"></i> 新建流程</Link>
        <Link to="/datasets" className="item"><i className="fa fa-database"></i> 管理数据集</Link>
      </div>
      <div className="group">
        <div className="g-title">近期项目</div>
        <div className="item"><i className="fa fa-robot"></i> FAQ 助理</div>
        <div className="item"><i className="fa fa-diagram-project"></i> 法务RAG流程</div>
        <div className="item"><i className="fa fa-diagram-project"></i> 客服自动化</div>
      </div>
      <div className="group">
        <div className="g-title">帮助</div>
        <div className="item"><i className="fa fa-book"></i> 文档中心</div>
        <div className="item"><i className="fa fa-circle-question"></i> 支持与反馈</div>
      </div>
    </aside>
  )
} 