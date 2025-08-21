export default function Agents() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-robot"></i> Agent</div>
        <div className="section-actions">
          <button className="btn primary"><i className="fa fa-plus"></i> 新建 Agent</button>
        </div>
      </div>
      <div className="grid">
        <div className="card"><div className="card-head"><div className="card-title">FAQ 助理</div><span className="muted">模板：客服</span></div><div className="muted">自动解答常见问题</div></div>
        <div className="card"><div className="card-head"><div className="card-title">法务助理</div><span className="muted">模板：法务</span></div><div className="muted">法律条款问答</div></div>
        <div className="card"><div className="card-head"><div className="card-title">报销助手</div><span className="muted">模板：财务</span></div><div className="muted">流程引导</div></div>
        <div className="card"><div className="card-head"><div className="card-title">销售助理</div><span className="muted">模板：销售</span></div><div className="muted">线索跟进</div></div>
      </div>
    </div>
  )
} 