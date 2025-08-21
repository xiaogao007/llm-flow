export default function Settings() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-gear"></i> 设置</div>
        <div className="section-actions">
          <button className="btn primary"><i className="fa fa-floppy-disk"></i> 保存设置</button>
        </div>
      </div>
      <div className="form">
        <div className="field"><label>默认模型</label><select><option>GPT-4o</option><option>Qwen</option><option>Claude</option></select></div>
        <div className="field"><label>温度 (temperature)</label><input className="input" type="number" step={0.1} defaultValue={0.2 as unknown as string} /></div>
        <div className="field"><label>Top P</label><input className="input" type="number" step={0.1} defaultValue={0.9 as unknown as string} /></div>
        <div className="field" style={{ gridColumn: 'span 12' }}><label>系统提示词</label><textarea rows={5} placeholder="你是一个专业助理..."></textarea></div>
      </div>
    </div>
  )
} 