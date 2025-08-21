export default function Flow() {
  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-diagram-project"></i> 工作流编排</div>
        <div className="section-actions">
          <button className="btn"><i className="fa fa-file-import"></i> 导入</button>
          <button className="btn"><i className="fa fa-file-export"></i> 导出</button>
          <button className="btn primary"><i className="fa fa-floppy-disk"></i> 保存</button>
          <button className="btn"><i className="fa fa-play"></i> 运行</button>
        </div>
      </div>
      <div className="flow">
        <div className="sider" style={{ height: '100%' }}>
          <div className="group"><div className="g-title">系统</div>
            <div className="item"><i className="fa fa-flag-checkered"></i> Begin</div>
            <div className="item"><i className="fa fa-message"></i> Message</div>
          </div>
          <div className="group"><div className="g-title">RAG / LLM</div>
            <div className="item"><i className="fa fa-magnifying-glass"></i> Retrieval</div>
            <div className="item"><i className="fa fa-wand-magic-sparkles"></i> Generate</div>
          </div>
          <div className="group"><div className="g-title">逻辑</div>
            <div className="item"><i className="fa fa-database"></i> Categorize</div>
            <div className="item"><i className="fa fa-code-branch"></i> Switch</div>
          </div>
          <div className="group"><div className="g-title">工具</div>
            <div className="item"><i className="fa fa-scroll"></i> Template</div>
            <div className="item"><i className="fa fa-plug"></i> Invoke</div>
            <div className="item"><i className="fa fa-envelope"></i> Email</div>
          </div>
        </div>
        <div className="flow-canvas">
          <div className="node" style={{ left: 80, top: 100 }}>
            <div className="nh">
              <div className="row"><i className="fa fa-flag-checkered" style={{ color: 'var(--accent)' }}></i> Begin</div>
              <div className="row">
                <button className="btn" style={{ height: 28, padding: '0 8px' }}><i className="fa fa-sliders"></i></button>
              </div>
            </div>
            <div className="nb"><b>欢迎提示</b><div className="muted" style={{ marginTop: 4 }}>你好！我是你的助理……</div></div>
          </div>
          <div className="node" style={{ left: 340, top: 100 }}>
            <div className="nh">
              <div className="row"><i className="fa fa-magnifying-glass" style={{ color: 'var(--accent-2)' }}></i> Retrieval</div>
              <button className="btn" style={{ height: 28, padding: '0 8px' }}><i className="fa fa-sliders"></i></button>
            </div>
            <div className="nb"><b>检索</b><div className="muted" style={{ marginTop: 4 }}>KB: 产品手册、FAQ</div></div>
          </div>
          <div className="node" style={{ left: 600, top: 100 }}>
            <div className="nh">
              <div className="row"><i className="fa fa-wand-magic-sparkles" style={{ color: 'var(--accent-3)' }}></i> Generate</div>
              <button className="btn" style={{ height: 28, padding: '0 8px' }}><i className="fa fa-sliders"></i></button>
            </div>
            <div className="nb"><b>生成草稿</b><div className="muted" style={{ marginTop: 4 }}>引用、风格、长度…</div></div>
          </div>
        </div>
      </div>
    </div>
  )
} 