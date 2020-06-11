<template>
  <div class="right-side-area" id="HomeMain">
   <div class="section-area">
     <div class="section-title flex-direction">
       <h2>Courses</h2>
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
       <table class="table">
         <thead>
           <tr>
             <th>Summary</th>
             <th>Description</th>
             <th>Builds</th>
             <th class="align-right" align="right">Last updated <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M6.744 8.744a1.053 1.053 0 0 0 0 1.49l4.547 4.557a1 1 0 0 0 1.416 0l4.55-4.558a1.051 1.051 0 1 0-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 0 0-1.487 0z" fill="currentColor"></path></svg></th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td colspan="3">
               <p>
                 <span class="svg-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12"><path d="M10.4,19.6,5.8,15l4.6-4.6L9,9,3,15l6,6Zm5.2,0L20.2,15l-4.6-4.6L17,9l6,6-6,6-1.4-1.4Z" transform="translate(-3 -9)" fill="#fff"/></svg>
                </span>
                <span class="description"> MYGOTO <br>Saddam Hussain / Untitled project - 2017‑09‑20</span>
               </p>
            </td>
             <td align="right"><svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
               <path fill="currentColor" fill-rule="evenodd" d="M8 10V8.002A4.004 4.004 0 0 1 12 4a4 4 0 0 1 4 4.002V10a2 2 0 0 1 2 2v6c0 1.105-.902 2-2.009 2H8.01A2 2 0 0 1 6 18v-6c0-1.102.897-1.995 2-2zm2 0h4V8.002A2.001 2.001 0 0 0 12 6c-1.102 0-2 .898-2 2.002V10zm2 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg></td>
           </tr>
         </tbody>
       </table>
     </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeMain',
  
}
</script>