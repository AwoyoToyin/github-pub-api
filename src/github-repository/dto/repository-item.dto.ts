import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { RepositoryLicenseDTO } from './repository-license.dto';
import { RepositoryUserDTO } from './repository-user.dto';

export class RepositoryItemDTO {
    @ApiProperty({
        required: true,
    })
    @IsNumber()
    id: number;

    @ApiProperty({
        required: true,
    })
    @IsString()
    node_id: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    name: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    full_name: string;

    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    private: boolean;

    @ApiProperty({
        required: true,
        type: RepositoryUserDTO,
    })
    @Type(() => RepositoryUserDTO)
    owner: RepositoryUserDTO;

    @ApiProperty({
        required: true,
    })
    @IsString()
    html_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    description: string;

    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    fork: boolean;

    @ApiProperty({
        required: true,
    })
    @IsString()
    url: string;

    @ApiProperty({
        required: true,
    })
    @IsDate()
    created_at: Date;

    @ApiProperty({
        required: true,
    })
    @IsDate()
    updated_at: Date;

    @ApiProperty({
        required: true,
    })
    @IsDate()
    pushed_at: Date;

    @ApiProperty({
        required: true,
    })
    @IsString()
    homepage: string;

    @ApiProperty({
        required: true,
    })
    @IsNumber()
    size: number;

    @ApiProperty({
        required: true,
    })
    @IsNumber()
    stargazers_count: number;

    @ApiProperty({
        required: true,
    })
    @IsNumber()
    watchers_count: number;

    @ApiProperty({
        required: true,
    })
    @IsString()
    language: string;

    @ApiProperty({
        required: true,
    })
    @IsNumber()
    forks_count: number;

    @ApiProperty({
        required: true,
    })
    @IsNumber()
    open_issues_count?: number;

    @ApiProperty({
        required: false,
    })
    @IsOptional()
    @IsString()
    master_branch?: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    default_branch: string;

    @ApiProperty({
        required: true,
    })
    @IsNumber()
    score: number;

    @ApiProperty({
        required: true,
    })
    @IsString()
    archive_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    assignees_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    blobs_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    branches_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    collaborators_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    comments_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    commits_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    compare_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    contents_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    contributors_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    deployments_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    downloads_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    events_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    forks_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    git_commits_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    git_refs_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    git_tags_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    git_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    issue_comment_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    issue_events_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    issues_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    keys_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    labels_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    languages_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    merges_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    milestones_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    notifications_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    pulls_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    releases_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    ssh_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    stargazers_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    statuses_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    subscribers_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    subscription_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    tags_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    teams_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    trees_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    clone_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    mirror_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    hooks_url: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    svn_url: string;

    @ApiProperty({
        required: true,
    })
    @IsNumber()
    forks: number;

    @ApiProperty({
        required: true,
    })
    @IsNumber()
    open_issues: number;

    @ApiProperty({
        required: true,
    })
    @IsNumber()
    watchers: number;

    @ApiProperty({
        required: false,
        type: [String],
    })
    @IsOptional()
    @IsArray()
    topics?: Array<string>;

    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    has_issues: boolean;

    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    has_projects: boolean;

    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    has_pages: boolean;

    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    has_wiki: boolean;

    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    has_downloads: boolean;

    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    archived: boolean;

    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    disabled: boolean;

    @ApiProperty({
        required: false,
    })
    @IsOptional()
    @IsString()
    visibility?: string;

    @ApiProperty({
        required: false,
        type: RepositoryLicenseDTO,
    })
    @Type(() => RepositoryLicenseDTO)
    license?: RepositoryLicenseDTO;
}