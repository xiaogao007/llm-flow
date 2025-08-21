export default function Profile() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-user"></i> 个人资料</div>
        <div className="section-actions">
          <button className="btn primary"><i className="fa fa-floppy-disk"></i> 保存</button>
        </div>
      </div>
      <div className="form">
        <div className="field"><label>昵称</label><input className="input" defaultValue="canghe"/></div>
        <div className="field"><label>邮箱</label><input className="input" type="email" defaultValue="canghe@example.com"/></div>
        <div className="field"><label>语言</label><select><option>中文</option><option>English</option></select></div>
        <div className="field"><label>主题</label><select><option>午夜玻璃风</option><option>亮色</option></select></div>
      </div>
    </div>
  )
} 