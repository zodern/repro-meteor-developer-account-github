<script>
  function signIn() {
    Meteor.loginWithMeteorDeveloperAccount({}, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  $m: userId = Meteor.userId();
</script>

<button on:click={signIn}>Sign in</button>

<p>User id: {userId}</p>

{#if userId}
  <button on:click={() => Meteor.logout()}>Log out</button>
{/if}
