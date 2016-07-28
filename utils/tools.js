export function formatUpdatedAt(updateTime) {
    const now = Date.now()
    const diff = now - (new Date(updateTime)).getTime()
    const diffDays = diff / (3600 * 1000 * 24) >> 0

    if(diffDays == 0)
        return "today"
    else if(diffDays == 1)
        return "yesterday"
    else
        return `${diffDays} days ago`
}