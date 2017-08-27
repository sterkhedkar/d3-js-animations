// this function will initialize the height and
// width for the svg viewbox
function initializeSvg(width, height){
	var svg = d3.select('#vizContainer').append('svg')
	.attr('width', width)
	.attr('height',height)
	.attr('viewBox', '0 0 '+width+' '+height)
    .attr('id', 'visualizations');
}

//this function will append desired type of element
// to the main svg, with given paramenters like x,y,href
function addNode( nodeObject ){
    d3.select("#visualizations")
    .append(nodeObject.type)
    .attr('href',nodeObject.href)
    .attr('width',nodeObject.width)
    .attr('x', nodeObject.x)
    .attr('y', nodeObject.y)
    .attr('id', nodeObject.id);
}

// this function will translate the element by x, y
// for given duration in milliseconds
function moveElement(element, byX, byY, duration){
    d3.select("#"+element)
    .transition()
    .attr("transform", "translate("+byX+","+byY+")")
    .duration(duration);
}

// this is a main function
// this will execute once the dom is ready
$( document ).ready( function(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var nodeSize = windowWidth * 0.1;
    var packetSize = windowWidth * 0.05;

    // you can define node object here
    var node1 = {
        x: windowWidth/2-windowWidth/3,
        y: windowHeight/2-windowHeight/7,
        width: nodeSize,
        type: 'image',
        href: 'assets/node.png',
        id: 'node1'
    }

    var node2 = {
        x: windowWidth/2+windowWidth/3.5,
        y: windowHeight/2-windowHeight/7,
        width: nodeSize,
        type: 'image',
        href: 'assets/node.png',
        id: 'node2'
    }

    var packet = {
        x: windowWidth/2-windowWidth/4,
        y: windowHeight/2-windowHeight/7.5,
        width: packetSize,
        type: 'image',
        href: 'assets/email.png',
        id: 'packet'
    }
    
    initializeSvg(windowWidth, windowHeight);
    addNode(node1);
    addNode(node2);
    addNode(packet);
    moveElement(packet.id,  windowWidth/2, 0, 1000);
})