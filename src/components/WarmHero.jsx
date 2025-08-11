import React, { useEffect, useRef } from 'react'

function WarmHero() {
  const networkRef = useRef(null)

  useEffect(() => {
    const network = networkRef.current
    if (!network) return

    // Create flowing network animation
    const createNetworkLine = (startX, startY, endX, endY, delay = 0) => {
      const line = document.createElement('div')
      line.className = 'network-line'
      line.style.left = `${Math.min(startX, endX)}%`
      line.style.top = `${Math.min(startY, endY)}%`
      line.style.width = `${Math.abs(endX - startX)}%`
      line.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`
      line.style.animationDelay = `${delay}s`
      return line
    }

    const createNetworkNode = (x, y, delay = 0) => {
      const node = document.createElement('div')
      node.className = 'network-node'
      node.style.left = `${x}%`
      node.style.top = `${y}%`
      node.style.animationDelay = `${delay}s`
      return node
    }

    // Clear existing elements
    network.innerHTML = ''

    // Add network nodes and lines
    const nodes = [
      { x: 10, y: 20 }, { x: 30, y: 15 }, { x: 70, y: 25 },
      { x: 90, y: 30 }, { x: 20, y: 60 }, { x: 50, y: 70 },
      { x: 80, y: 65 }, { x: 15, y: 85 }, { x: 85, y: 80 }
    ]

    // Add nodes
    nodes.forEach((node, i) => {
      network.appendChild(createNetworkNode(node.x, node.y, i * 0.3))
    })

    // Add connecting lines
    const connections = [
      [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [6, 3], [4, 7], [5, 8], [6, 8]
    ]
    
    connections.forEach(([start, end], i) => {
      const startNode = nodes[start]
      const endNode = nodes[end]
      network.appendChild(createNetworkLine(
        startNode.x, startNode.y, 
        endNode.x, endNode.y, 
        i * 0.2
      ))
    })
  }, [])

  const handleJoinFlow = () => {
    document.getElementById('join-flow')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLearnMore = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="network-bg" ref={networkRef}></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🌐</span>
            <span>One Backbone. Infinite Communities.</span>
          </div>
          
          <h1 className="text-hero">
            FlowBond — <span className="gradient-text">Belong, Connect, Thrive</span>
          </h1>
          
          <p className="text-body-large hero-subtitle">
            One unified platform where you join, contribute, and see your impact, no matter who you are.
          </p>
          
          <div className="hero-actions">
            <button onClick={handleJoinFlow} className="btn btn-primary btn-large">
              Join the Flow
            </button>
            <button onClick={handleLearnMore} className="btn btn-secondary btn-large">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WarmHero