export default function Api() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-key"></i> API & SDK</div>
        <div className="section-actions">
          <button className="btn"><i className="fa fa-plus"></i> 新建密钥</button>
          <button className="btn"><i className="fa fa-book"></i> 文档</button>
        </div>
      </div>
      <div className="grid">
        <div className="card" style={{ gridColumn: 'span 12' }}>
          <table className="table">
            <thead><tr><th>名称</th><th>Key</th><th>权限</th><th>创建时间</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td>frontend</td><td className="mono">sk_live_************abcd</td><td>read</td><td>2025-08-20</td><td><button className="btn">复制</button> <button className="btn warn">禁用</button></td></tr>
              <tr><td>backend</td><td className="mono">sk_live_************wxyz</td><td>read/write</td><td>2025-08-10</td><td><button className="btn">复制</button> <button className="btn warn">禁用</button></td></tr>
            </tbody>
          </table>
        </div>
        <div className="card" style={{ gridColumn: 'span 12' }}>
          <div className="card-head"><div className="card-title">示例</div></div>
          <pre className="mono" style={{ whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.25)', padding: 12, borderRadius: 10 }}>{`curl -X POST https://api.EasyFlow.ai/v1/chat \
  -H "Authorization: Bearer sk_live_..." \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"hello"}]}'`}</pre>
        </div>
      </div>
    </div>
  )
} 