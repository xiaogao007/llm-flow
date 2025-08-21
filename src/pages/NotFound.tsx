export default function NotFound() {
  return (
    <div>
      <div className="section-head"><div className="section-title"><i className="fa fa-triangle-exclamation"></i> 页面不存在</div></div>
      <div className="grid">
        <div className="card" style={{ gridColumn: 'span 12', textAlign: 'center' }}>
          <h2 style={{ margin: '10px 0' }}>404</h2>
          <p className="muted">抱歉，页面不存在</p>
        </div>
      </div>
    </div>
  )
} 