"use strict";var container,camera,scene,renderer,particles,particle,canvasHeight=400,SEPARATION=100,AMOUNTX=80,AMOUNTY=40,particleColor="#3f3f3f",count=0,mouseX=0,mouseY=0;function getCanvasContainerWidth(){return document.querySelector(".canvas-container").clientWidth}(container=document.createElement("div")).classList.add("canvas-container"),container.classList.add("hidden"),setTimeout(function(){container.classList.remove("hidden")},1e3),document.body.appendChild(container);var windowHalfX=getCanvasContainerWidth()/2,windowHalfY=canvasHeight/2;function init(){(camera=new THREE.PerspectiveCamera(75,getCanvasContainerWidth()/canvasHeight,1,1e4)).position.z=1e4,scene=new THREE.Scene,particles=new Array;for(var n=2*Math.PI,e=new THREE.SpriteCanvasMaterial({color:particleColor,program:function(e){e.beginPath(),e.arc(0,0,.5,0,n,!0),e.fill()}}),a=0,i=0;i<AMOUNTX;i++)for(var t=0;t<AMOUNTY;t++)(particle=particles[a++]=new THREE.Sprite(e)).position.x=i*SEPARATION-AMOUNTX*SEPARATION/2,particle.position.z=t*SEPARATION-AMOUNTY*SEPARATION/2,scene.add(particle);(renderer=new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio),renderer.setSize(getCanvasContainerWidth(),canvasHeight),container.appendChild(renderer.domElement),window.addEventListener("resize",onWindowResize,!1)}function onWindowResize(){var e=getCanvasContainerWidth();windowHalfX=e/2,windowHalfY=canvasHeight/2,camera.aspect=e/canvasHeight,camera.updateProjectionMatrix(),renderer.setSize(e,canvasHeight)}function animate(){requestAnimationFrame(animate),render()}function render(){camera.position.set(0,355,122);for(var e=0,n=0;n<AMOUNTX;n++)for(var a=0;a<AMOUNTY;a++)(particle=particles[e++]).position.y=50*Math.sin(.3*(n+count))+50*Math.sin(.5*(a+count)),particle.scale.x=particle.scale.y=4*(Math.sin(.3*(n+count))+1)+4*(Math.sin(.5*(a+count))+1);renderer.render(scene,camera),count+=.1}init(),animate();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2JnLmpzIl0sIm5hbWVzIjpbInBhcnRpY2xlQ29sb3IiLCJjYW1lcmEiLCJzY2VuZSIsInJlbmRlcmVyIiwiY2FudmFzSGVpZ2h0IiwiU0VQQVJBVElPTiIsIkFNT1VOVFgiLCJwYXJ0aWNsZXMiLCJtb3VzZVkiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY2xhc3NMaXN0IiwicXVlcnlTZWxlY3RvciIsImNsaWVudFdpZHRoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwibW91c2VYIiwicmVtb3ZlIiwid2luZG93SGFsZlgiLCJnZXRDYW52YXNDb250YWluZXJXaWR0aCIsIndpbmRvd0hhbGZZIiwiaW5pdCIsImFuaW1hdGUiLCJUSFJFRSIsIlNjZW5lIiwiUEkyIiwiTWF0aCIsIlBJIiwiU3ByaXRlQ2FudmFzTWF0ZXJpYWwiLCJwcm9ncmFtIiwiY29udGV4dCIsIm1hdGVyaWFsIiwiYXJjIiwiY29sb3IiLCJpIiwiaXgiLCJpeSIsIkFNT1VOVFkiLCJwYXJ0aWNsZSIsIlNwcml0ZSIsInBvc2l0aW9uIiwieCIsIkNhbnZhc1JlbmRlcmVyIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJhZGRFdmVudExpc3RlbmVyIiwib25XaW5kb3dSZXNpemUiLCJjYW52YXNDb250YWluZXJXaWR0aCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJzZXRTaXplIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwic2V0Iiwic2NhbGUiLCJ5Iiwic2luIiwiY291bnQiXSwibWFwcGluZ3MiOiJhQUNBLElBSUlBLFVBR0FDLE9BQVFDLE1BQU9DLFNBQWZGLFVBQVFDLFNBUFJFLGFBQWUsSUFEbkJDLFdBQUEsSUFDSUQsUUFBQUEsR0FDQUMsUUFBQUEsR0FDQUMsY0FBSixVQUttQkgsTUFBbkIsRUFFSUksT0FBSixFQUFBQyxPQUFBLEVBT0FDLFNBQUFBLDBCQUNJQyxPQUFVQyxTQUFWQyxjQUEyQixxQkFBM0JDLGFBUkpILFVBQWlDSSxTQUFqQ0MsY0FBQSxRQUtVSixVQUFVSyxJQUFJLG9CQUh4Qk4sVUFBSU8sVUFBSkQsSUFBQSxVQUFBUCxXQUFnQkQsV0FNWkUsVUFBVUMsVUFBVU8sT0FBTyxXQUovQlIsS0FDQUEsU0FBQUEsS0FBVUMsWUFBY0QsV0FXeEIsSUFBSVMsWUFBY0MsMEJBQTRCLEVBSjlDQyxZQUFTRCxhQUFULEVBS0EsU0FBSUMsUUFFSkMsT0FBQUEsSUFBQUEsTUFBQUEsa0JBQUFBLEdBQUFBLDBCQUFBQSxhQUFBQSxFQUFBQSxNQUNBQyxTQUFBQSxFQUFBQSxJQUVBckIsTUFBU29CLElBQVRFLE1BQWdCQyxNQUVmeEIsVUFBUyxJQUFJdUIsTUFRa0MsSUFEL0MsSUFBSUUsRUFBZ0IsRUFBVkMsS0FBS0MsR0FKZjFCLEVBQVlzQixJQUFNQyxNQUFsQkkscUJBQUEsQ0FFQXRCLE1BQUFBLGNBTUN1QixRQUFTLFNBQVdDLEdBSHJCQSxFQUFJQyxZQU1GRCxFQUFRRSxJQUFLLEVBQUcsRUFBRyxHQUFLLEVBQUdQLEdBQUssR0FKakNRLEVBQU9sQyxVQU9ObUMsRUFBQSxFQVRGQyxFQUFBLEVBQUFBLEVBQUE5QixRQUFBOEIsSUFhQSxJQUFJRCxJQUFKRSxFQUFBLEVBQUFBLEVBQUFDLFFBQUFELEtBRUFFLFNBQVVILFVBQWE5QixLQUFTOEIsSUFBUVosTUFBQWdCLE9BQUFSLElBSzdCUyxTQUFTQyxFQUFJTixFQUFLL0IsV0FBaUJDLFFBQVVELFdBQWUsRUFIdEVrQyxTQUFVRixTQUFRQSxFQUFLQyxFQUFBQSxXQUFpQkEsUUFBQWpDLFdBQUEsRUFLdkNILE1BQU1jLElBQUt1QixXQUlacEMsU0FBQSxJQUFBcUIsTUFBQW1CLGdCQUdRQyxjQUFlQyxPQUFPQyxrQkFEL0IzQyxTQUFBQSxRQUFlcUIsMEJBQWZwQixjQUNBRCxVQUFTeUMsWUFBZUMsU0FBT0MsWUFRL0JELE9BQU9FLGlCQUFrQixTQUFVQyxnQkFBZ0IsR0FLbEQsU0FBSUMsaUJBQUosSUFBSUEsRUFBdUI3QiwwQkFHNUJDLFlBQWNqQixFQUFkLEVBQUFpQixZQUFjakIsYUFBZSxFQUc3QkgsT0FBT2lELE9BQUFBLEVBQVA5QyxhQUFBSCxPQUFPaUQseUJBSVAvQyxTQUFBZ0QsUUFBQUYsRUFBQTdDLGNBUUFnRCxTQUFBQSxVQUVBQyxzQkFBQUEsU0FBQUEsU0FJRCxTQUFTQSxTQU9ScEQsT0FBTXdDLFNBQU5hLElBQWtCbEIsRUFBSzlCLElBQUFBLEtBSXJCaUMsSUFGRCxJQUFBSixFQUFNLEVBRUxJLEVBQVdoQyxFQUFBQSxFQUFXNEIsUUFBdEJDLElBR0FHLElBQUFBLElBQVNnQixFQUFULEVBQUFsQixFQUFtQkUsUUFBU2dCLEtBSzdCaEIsU0FBQWhDLFVBQUE0QixNQVBVTSxTQUFTZSxFQUF5QyxHQUFuQzdCLEtBQUs4QixJQUFzQixJQUFmckIsRUFBS3NCLFFBUzNDLEdBQUF2RCxLQUFTa0QsSUFBVCxJQUFpQm5ELEVBQWpCd0QsUUFQRW5CLFNBQVNnQixNQUFNYixFQUFJSCxTQUFTZ0IsTUFBTUMsRUFBK0MsR0FBekM3QixLQUFLOEIsSUFBc0IsSUFBZnJCLEVBQUtzQixRQUFrQixHQVM3RSxHQUFBQSxLQUFTRCxJQUFULElBQUFwQixFQUFBcUIsUUFBQSxHQUZBdkQsU0FBU2tELE9BQVFuRCxNQUFPRCxRQUV4QnlELE9BQVMsR0EzR1RwQyxPQU1EQyIsImZpbGUiOiJqcy9iZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1pbk9uU2F2ZTogdHJ1ZSwgbWluaWZpZXI6IHVnbGlmeS1qc1xudmFyIGNhbnZhc0hlaWdodCA9IDQwMDtcbnZhciBTRVBBUkFUSU9OID0gMTAwO1xudmFyIEFNT1VOVFggPSA4MDtcbnZhciBBTU9VTlRZID0gNDA7XG52YXIgcGFydGljbGVDb2xvciA9IFwiIzNmM2YzZlwiO1xuXG52YXIgY29udGFpbmVyO1xudmFyIGNhbWVyYSwgc2NlbmUsIHJlbmRlcmVyO1xuXG52YXIgcGFydGljbGVzLCBwYXJ0aWNsZSwgY291bnQgPSAwO1xuXG52YXIgbW91c2VYID0gMCwgbW91c2VZID0gMDtcblxuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FudmFzLWNvbnRhaW5lclwiKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn0sIDEwMDApO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggY29udGFpbmVyICk7XG5cbmZ1bmN0aW9uIGdldENhbnZhc0NvbnRhaW5lcldpZHRoKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbnZhcy1jb250YWluZXJcIikuY2xpZW50V2lkdGg7XG59XG5cbnZhciB3aW5kb3dIYWxmWCA9IGdldENhbnZhc0NvbnRhaW5lcldpZHRoKCkgLyAyO1xudmFyIHdpbmRvd0hhbGZZID0gY2FudmFzSGVpZ2h0IC8gMjtcblxuaW5pdCgpO1xuYW5pbWF0ZSgpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXG5cdGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIGdldENhbnZhc0NvbnRhaW5lcldpZHRoKCkgLyBjYW52YXNIZWlnaHQsIDEsIDEwMDAwICk7XG5cdGNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDA7XG5cblx0c2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuXHRwYXJ0aWNsZXMgPSBuZXcgQXJyYXkoKTtcblxuXHR2YXIgUEkyID0gTWF0aC5QSSAqIDI7XG5cdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TcHJpdGVDYW52YXNNYXRlcmlhbCgge1xuXG5cdFx0Y29sb3I6IHBhcnRpY2xlQ29sb3IsXG5cdFx0cHJvZ3JhbTogZnVuY3Rpb24gKCBjb250ZXh0ICkge1xuXG5cdFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpO1xuXHRcdFx0Y29udGV4dC5hcmMoIDAsIDAsIDAuNSwgMCwgUEkyLCB0cnVlICk7XG5cdFx0XHRjb250ZXh0LmZpbGwoKTtcblxuXHRcdH1cblxuXHR9ICk7XG5cblx0dmFyIGkgPSAwO1xuXG5cdGZvciAoIHZhciBpeCA9IDA7IGl4IDwgQU1PVU5UWDsgaXggKysgKSB7XG5cblx0XHRmb3IgKCB2YXIgaXkgPSAwOyBpeSA8IEFNT1VOVFk7IGl5ICsrICkge1xuXG5cdFx0XHRwYXJ0aWNsZSA9IHBhcnRpY2xlc1sgaSArKyBdID0gbmV3IFRIUkVFLlNwcml0ZSggbWF0ZXJpYWwgKTtcblx0XHRcdHBhcnRpY2xlLnBvc2l0aW9uLnggPSBpeCAqIFNFUEFSQVRJT04gLSAoICggQU1PVU5UWCAqIFNFUEFSQVRJT04gKSAvIDIgKTtcblx0XHRcdHBhcnRpY2xlLnBvc2l0aW9uLnogPSBpeSAqIFNFUEFSQVRJT04gLSAoICggQU1PVU5UWSAqIFNFUEFSQVRJT04gKSAvIDIgKTtcblx0XHRcdHNjZW5lLmFkZCggcGFydGljbGUgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0cmVuZGVyZXIgPSBuZXcgVEhSRUUuQ2FudmFzUmVuZGVyZXIoKTtcblx0cmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcblx0cmVuZGVyZXIuc2V0U2l6ZSggZ2V0Q2FudmFzQ29udGFpbmVyV2lkdGgoKSwgY2FudmFzSGVpZ2h0ICk7XG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG5cblxuXHQvL1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlICk7XG5cbn1cblxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gIHZhciBjYW52YXNDb250YWluZXJXaWR0aCA9IGdldENhbnZhc0NvbnRhaW5lcldpZHRoKCk7XG5cblx0d2luZG93SGFsZlggPSBjYW52YXNDb250YWluZXJXaWR0aCAvIDI7XG5cdHdpbmRvd0hhbGZZID0gY2FudmFzSGVpZ2h0IC8gMjtcblxuXHRjYW1lcmEuYXNwZWN0ID0gY2FudmFzQ29udGFpbmVyV2lkdGggLyBjYW52YXNIZWlnaHQ7XG5cdGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cblx0cmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzQ29udGFpbmVyV2lkdGgsIGNhbnZhc0hlaWdodCApO1xuXG59XG5cbi8vXG5cbi8vXG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG5cblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XG5cblx0cmVuZGVyKCk7XG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuXG5cblx0Y2FtZXJhLnBvc2l0aW9uLnNldCgwLDM1NSwxMjIpO1xuXG5cdHZhciBpID0gMDtcblxuXHRmb3IgKCB2YXIgaXggPSAwOyBpeCA8IEFNT1VOVFg7IGl4ICsrICkge1xuXG5cdFx0Zm9yICggdmFyIGl5ID0gMDsgaXkgPCBBTU9VTlRZOyBpeSArKyApIHtcblxuXHRcdFx0cGFydGljbGUgPSBwYXJ0aWNsZXNbIGkrKyBdO1xuXHRcdFx0cGFydGljbGUucG9zaXRpb24ueSA9ICggTWF0aC5zaW4oICggaXggKyBjb3VudCApICogMC4zICkgKiA1MCApICtcblx0XHRcdFx0KCBNYXRoLnNpbiggKCBpeSArIGNvdW50ICkgKiAwLjUgKSAqIDUwICk7XG5cdFx0XHRwYXJ0aWNsZS5zY2FsZS54ID0gcGFydGljbGUuc2NhbGUueSA9ICggTWF0aC5zaW4oICggaXggKyBjb3VudCApICogMC4zICkgKyAxICkgKiA0ICtcblx0XHRcdFx0KCBNYXRoLnNpbiggKCBpeSArIGNvdW50ICkgKiAwLjUgKSArIDEgKSAqIDQ7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xuXG5cdGNvdW50ICs9IDAuMTtcblxufVxuIl19
