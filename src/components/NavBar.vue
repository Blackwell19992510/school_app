<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">School Api</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/"  class="nav-link" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coursespage"  class="nav-link">Courses</router-link>            
          </li>
        </ul>
        <li class="nav-item">
            <router-link to="/newcourse"  class="nav-link">New Course</router-link>            
        </li>
      </div>
    </div>
  </nav>
  </template>
  <script>

</script>