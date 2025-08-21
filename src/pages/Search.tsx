export default function Search() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-magnifying-glass"></i> 搜索</div>
        <div className="section-actions">
          <button className="btn"><i className="fa fa-filter"></i> 筛选</button>
        </div>
      </div>
      <div className="form">
        <div className="field" style={{ gridColumn: 'span 8' }}><label>关键词</label><input className="input" placeholder="请输入关键词"/></div>
        <div className="field" style={{ gridColumn: 'span 2' }}><label>类型</label><select><option>全部</option><option>文档</option><option>对话</option><option>流程</option></select></div>
        <div className="field" style={{ gridColumn: 'span 2' }}><label>&nbsp;</label><button className="btn primary" style={{ width: '100%' }}>搜索</button></div>
      </div>
      <div className="grid">
        <div className="card" style={{ gridColumn: 'span 12' }}>
          <table className="table">
            <thead><tr><th>标题</th><th>类型</th><th>描述</th><th>更新时间</th></tr></thead>
            <tbody>
              <tr><td>pricing.md</td><td>文档</td><td>订阅价格说明</td><td>今天</td></tr>
              <tr><td>FAQ 助理</td><td>对话</td><td>近期会话</td><td>昨天</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 