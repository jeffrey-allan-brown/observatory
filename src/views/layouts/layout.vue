<template>
  <div class="d-flex flex-column flex-root">
    <div class="d-flex flex-row flex-column-fluid page">
      <div class="d-flex flex-column flex-row-fluid wrapper">
        <div class="content d-flex flex-column flex-column-fluid">
          <div class="d-flex flex-column-fluid">
            <div>
              <div class="d-lg-flex flex-row-fluid">
                <div class="content-wrapper flex-row-fluid">
                  <div>
                    <div class="row justify-content-md-center">
                      <div class="col-12 p-0">
                        <router-view></router-view>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
  components: {

  }
};
</script>
