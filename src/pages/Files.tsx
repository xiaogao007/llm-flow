export default function Files() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-folder-open"></i> 文件</div>
        <div className="section-actions">
          <button className="btn"><i className="fa fa-upload"></i> 上传</button>
          <button className="btn"><i className="fa fa-folder-plus"></i> 新建文件夹</button>
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
        <div className="card" style={{ gridColumn: 'span 12' }}>
          <table className="table">
            <thead><tr><th>名称</th><th>类型</th><th>大小</th><th>更新时间</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td>pricing.md</td><td>Markdown</td><td>12 KB</td><td>今天 12:00</td><td><button className="btn">预览</button> <button className="btn">删除</button></td></tr>
              <tr><td>faq.pdf</td><td>PDF</td><td>234 KB</td><td>昨天 09:33</td><td><button className="btn">预览</button> <button className="btn warn">移除</button></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 