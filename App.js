const parent= React.createElement('parent',{id:'parent'},[React.createElement('child',{id:'child1'},[React.createElement('h1',{},'h1'),React.createElement('h2',{},'h2')]),React.createElement('child',{id:'child1'},[React.createElement('h1',{},'h1'),React.createElement('h2',{},'h2')])])



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)