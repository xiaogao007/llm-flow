export default function Home() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-house"></i> 概览</div>
        <div className="section-actions">
          <button className="btn"><i className="fa fa-plus"></i> 新建工作流</button>
          <button className="btn"><i className="fa fa-robot"></i> 创建 Agent</button>
        </div>
      </div>
      <div className="grid">
        <div className="kpi">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div>
              <div className="muted">会话总量</div>
              <div style={{ fontSize: 24, fontWeight: 700 }}>12,384</div>
            </div>
            <i className="fa fa-comments" style={{ color: 'var(--accent)' }}></i>
          </div>
        </div>
        <div className="kpi">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div>
              <div className="muted">知识库文档</div>
              <div style={{ fontSize: 24, fontWeight: 700 }}>2,157</div>
            </div>
            <i className="fa fa-book" style={{ color: 'var(--accent-2)' }}></i>
          </div>
        </div>
        <div className="kpi">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div>
              <div className="muted">活跃流程</div>
              <div style={{ fontSize: 24, fontWeight: 700 }}>17</div>
            </div>
            <i className="fa fa-diagram-project" style={{ color: 'var(--accent-3)' }}></i>
          </div>
        </div>
        <div className="kpi">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div>
              <div className="muted">平均响应(ms)</div>
              <div style={{ fontSize: 24, fontWeight: 700 }}>812</div>
            </div>
            <i className="fa fa-gauge" style={{ color: 'var(--ok)' }}></i>
          </div>
        </div>
        <div className="card" style={{ gridColumn: 'span 8' }}>
          <div className="card-head">
            <div className="card-title">使用趋势</div>
            <div className="muted mono">(图表占位)</div>
          </div>
          <div style={{ height: 220, border: '1px dashed var(--border)', borderRadius: 10 }}></div>
        </div>
        <div className="card" style={{ gridColumn: 'span 4' }}>
          <div className="card-head"><div className="card-title">最近运行</div></div>
          <table className="table">
            <thead><tr><th>名称</th><th>状态</th><th>时间</th></tr></thead>
            <tbody>
              <tr><td>客服自动化</td><td><span className="muted">完成</span></td><td>12:03</td></tr>
              <tr><td>财务问答</td><td><span className="muted">完成</span></td><td>11:58</td></tr>
              <tr><td>法务RAG</td><td><span className="muted">失败</span></td><td>11:40</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 