export default function Datasets() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-database"></i> 数据集</div>
        <div className="section-actions">
          <button className="btn primary"><i className="fa fa-plus"></i> 新建数据集</button>
        </div>
      </div>
      <div className="grid">
        <div className="card"><div className="card-head"><div className="card-title">FAQ 文档</div><span className="muted">123 篇</span></div><div className="muted">企业常见问题</div></div>
        <div className="card"><div className="card-head"><div className="card-title">产品手册</div><span className="muted">58 篇</span></div><div className="muted">硬件/软件安装</div></div>
        <div className="card"><div className="card-head"><div className="card-title">法务条款</div><span className="muted">37 篇</span></div><div className="muted">合同/隐私/免责声明</div></div>
        <div className="card"><div className="card-head"><div className="card-title">财务报销</div><span className="muted">21 篇</span></div><div className="muted">流程与模板</div></div>
      </div>
    </div>
  )
} 