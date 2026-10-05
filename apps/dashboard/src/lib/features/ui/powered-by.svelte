<script lang="ts">
  import { cn } from '@cio/ui/tools';

  type Props = {
    variant?: 'floating' | 'sidebar';
    class?: string;
    showOnlyLogo?: boolean;
    courseSlug?: string | null;
    orgSlug?: string | null;
    sidebarUtmSource?: string;
  };

  let { variant = 'floating', class: className, showOnlyLogo = false }: Props = $props();

  const sourceCodeUrl = 'https://github.com/m43612605-dev/classroomio';
</script>

{#if variant === 'sidebar' && !showOnlyLogo}
  <div class={cn('text-muted-foreground flex w-full items-center px-3 text-xs', className)}>
    <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer" class="underline-offset-2 hover:underline">
      Source code
    </a>
  </div>
{:else if variant === 'floating'}
  <div class={cn('text-muted-foreground w-full py-6 text-center text-xs', className)}>
    <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer" class="underline-offset-2 hover:underline">
      Source code
    </a>
  </div>
{/if}
