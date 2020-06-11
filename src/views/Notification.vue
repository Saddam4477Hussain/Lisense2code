<template>
  <div class="right-side-area" id="notification">
    <div class="section-area">
     <div class="section-title flex-direction">
       <h2>Notification</h2>
       <a href="#">Create repositories</a>
     </div>
     <br>
     <div class="search-area">
       <ul class="search-bar">
         <li class="search">
           <input type="text" placeholder="Search repositories">
           <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" fill="currentColor" fill-rule="evenodd"></path></svg>
         </li>
         <li>
           <a href="#">Workspace <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M6.744 8.744a1.053 1.053 0 0 0 0 1.49l4.547 4.557a1 1 0 0 0 1.416 0l4.55-4.558a1.051 1.051 0 1 0-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 0 0-1.487 0z" fill="currentColor"></path></svg></a>
         </li>
         <li>
           <a href="#">Project <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M6.744 8.744a1.053 1.053 0 0 0 0 1.49l4.547 4.557a1 1 0 0 0 1.416 0l4.55-4.558a1.051 1.051 0 1 0-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 0 0-1.487 0z" fill="currentColor"></path></svg></a>
         </li>
         <li>
           <a href="#">Type <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M6.744 8.744a1.053 1.053 0 0 0 0 1.49l4.547 4.557a1 1 0 0 0 1.416 0l4.55-4.558a1.051 1.051 0 1 0-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 0 0-1.487 0z" fill="currentColor"></path></svg></a>
         </li>
         <li>
           <a href="#">Watching </a>
         </li>
       </ul>
     </div>
     <div class="notification-area">
       <p>
         The server cannot be reached and therefore<br> lorem ipsum data loss. Lorem ipsum per<br> secular seculorum.
       </p>
       <a href="#">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"><text transform="translate(0 16)" fill="#a80000" font-size="16" font-family="FabricExternalMDL2Assets, Fabric External MDL2 Assets"><tspan x="0" y="0"></tspan></text></svg>
       </a>
     </div>
   </div>
  </div>
</template>

<script>

export default {
    name: "notification"
}
</script>