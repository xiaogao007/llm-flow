export default function Knowledge() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-book"></i> 知识</div>
        <div className="section-actions">
          <button className="btn"><i className="fa fa-plug"></i> 连接知识源</button>
        </div>
      </div>
      <div className="grid">
        <div className="card"><div className="card-head"><div className="card-title">企业知识库</div><span className="muted">MySQL</span></div><div className="muted">生产</div></div>
        <div className="card"><div className="card-head"><div className="card-title">外部文档</div><span className="muted">S3</span></div><div className="muted">公共</div></div>
        <div className="card"><div className="card-head"><div className="card-title">内网Wiki</div><span className="muted">Confluence</span></div><div className="muted">内部</div></div>
      </div>
    </div>
  )
} 