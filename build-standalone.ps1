# Build save-editor-standalone.html
# Embeds data.js and skills_data.json into save-editor.html as a single file
$html = [System.IO.File]::ReadAllText("save-editor.html", [System.Text.Encoding]::UTF8)
$dataJs = [System.IO.File]::ReadAllText("data.js", [System.Text.Encoding]::UTF8)
$skillsJson = [System.IO.File]::ReadAllText("skills_data.json", [System.Text.Encoding]::UTF8)

# Build embed block using array join to avoid PowerShell string interpolation issues
$embedBlock = @(
    "<script>",
    "// === Embedded data.js ===",
    $dataJs,
    "// === Embedded skills_data.json ===",
    "window.__EMBEDDED_SKILLS_DATA__ = " + $skillsJson + ";",
    "</script>"
) -join "`n"

$html = $html.Replace('<script src="data.js"></script>', $embedBlock)
$html = $html.Replace("fetch('skills_data.json').then(r => r.ok ? r.json() : []).then(data => {", "Promise.resolve(window.__EMBEDDED_SKILLS_DATA__ || []).then(data => {")

[System.IO.File]::WriteAllText("save-editor-standalone.html", $html, [System.Text.Encoding]::UTF8)

$size = [math]::Round((Get-Item "save-editor-standalone.html").Length / 1024)
Write-Output "Built save-editor-standalone.html ($size KB)"
