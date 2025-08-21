import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="logo">C</div>
        <div>
          <div className="title">EasyFlow 智能平台</div>
          <div className="muted" style={{ fontSize: 12 }}>Midnight Glass Theme</div>
        </div>
      </div>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-house"></i> 首页</NavLink>
        <NavLink to="/chat" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-comments"></i> 聊天</NavLink>
        <NavLink to="/flow" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-diagram-project"></i> 流程</NavLink>
        <NavLink to="/datasets" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-database"></i> 数据集</NavLink>
        <NavLink to="/files" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-folder-open"></i> 文件</NavLink>
        <NavLink to="/knowledge" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-book"></i> 知识</NavLink>
        <NavLink to="/agents" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-robot"></i> Agent</NavLink>
        <NavLink to="/search" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-magnifying-glass"></i> 搜索</NavLink>
        <NavLink to="/api" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-key"></i> API</NavLink>
        <NavLink to="/settings" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-gear"></i> 设置</NavLink>
        <NavLink to="/profile" className={({ isActive }) => 'chip' + (isActive ? ' active' : '')}><i className="fa fa-user"></i> 个人</NavLink>
      </nav>
    </header>
  )
} 