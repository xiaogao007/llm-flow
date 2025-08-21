import { useState } from 'react'

type ChatMessage = { role: 'user' | 'ai'; text: string }

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'ai', text: '您好，我是 FAQ 助理，有什么可以帮助的？' },
    { role: 'user', text: '帮我介绍一下你们的付费方案' },
    { role: 'ai', text: '我们提供基础版与企业版，支持月付与年付……' },
  ])
  const [inputText, setInputText] = useState('')

  function send() {
    const text = inputText.trim()
    if (!text) return
    setMessages(prev => [...prev, { role: 'user', text }])
    setInputText('')
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: '示例回复：' + text }])
    }, 400)
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <div>
      <div className="section-head">
        <div className="section-title"><i className="fa fa-comments"></i> 聊天</div>
        <div className="section-actions">
          <button className="btn"><i className="fa fa-plus"></i> 新建会话</button>
          <button className="btn"><i className="fa fa-share-nodes"></i> 分享</button>
        </div>
      </div>
      <div className="chat">
        <div className="chat-panel">
          <div className="row" style={{ padding: 10, gap: 8, borderBottom: '1px solid var(--border)' }}>
            <i className="fa fa-magnifying-glass muted"></i>
            <input className="input" placeholder="搜索会话" style={{ flex: 1 }} />
          </div>
          <div className="chat-list" id="chat-list">
            <div className="chat-item">FAQ 助理</div>
            <div className="chat-item">法务问答</div>
            <div className="chat-item">客服自动化</div>
          </div>
        </div>
        <div className="chat-panel chat-main">
          <div className="row" style={{ padding: 10, gap: 8, borderBottom: '1px solid var(--border)' }}>
            <div className="muted">与 <b>FAQ 助理</b> 对话</div>
            <span className="chip" style={{ marginLeft: 'auto' }}><i className="fa fa-robot"></i> GPT-4o</span>
          </div>
          <div className="chat-msgs" id="chat-msgs">
            {messages.map((m, idx) => (
              <div key={idx} className={`bubble ${m.role}`}>{m.text}</div>
            ))}
          </div>
          <div className="chat-input">
            <textarea rows={3} id="chat-input" value={inputText} onChange={e => setInputText(e.target.value)} placeholder="输入内容... (Enter 发送, Shift+Enter 换行)" onKeyDown={onKeyDown}></textarea>
            <button className="btn primary" onClick={send}><i className="fa fa-paper-plane"></i></button>
          </div>
        </div>
        <div className="chat-panel">
          <div className="row" style={{ padding: 10, gap: 8, borderBottom: '1px solid var(--border)' }}>
            <div className="muted">上下文</div>
            <span className="chip" style={{ marginLeft: 'auto' }}><i className="fa fa-rotate"></i> 重置</span>
          </div>
          <div style={{ padding: 10, overflow: 'auto' }}>
            <div className="muted" style={{ marginBottom: 6 }}>消息窗口: {messages.length}</div>
            <div className="muted">引用来源 (References):</div>
            <ul className="mono" style={{ fontSize: 12, lineHeight: 1.6 }}>
              <li>docs/price.md#pricing</li>
              <li>faq/billing.md#invoice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 