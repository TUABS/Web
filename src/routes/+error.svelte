<script>
    import { page } from '$app/stores';
    import { Display, Snippet } from '@geist-ui/core'

</script>
<div id="error">
    <react:Display width="50%" caption={$page.error.message}>
    <react:Snippet copy="prevent" type="dark">{$page.status + " ERROR"}</react:Snippet>
  </react:Display>
</div>

<style>
    #error {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 256px);
    }
</style>